import routes from "~/router/routes";
import { RegistrationStatus } from "~/types";
import { removeNonNumericCharacters } from "~/utils/formatters/removeNonNumericCharacters";

const validCpf = "466.920.430-00";
const invalidCpf = "000.000.000-00";

const responseData = {
  id: 98451,
  name: "John Doe",
  email: "john.doe@example.com",
  cpf: validCpf,
  admissionDate: "2024-09-01",
  status: RegistrationStatus.Review,
};

const applicationsData = [
  { id: 1, name: "John Doe", status: RegistrationStatus.Review },
  { id: 2, name: "Jane Smith", status: RegistrationStatus.Approved },
  { id: 3, name: "Janete Smith", status: RegistrationStatus.Approved },
  { id: 4, name: "Jane Smith", status: RegistrationStatus.Reproved },
  { id: 5, name: "Jane Smith", status: RegistrationStatus.Reproved },
  { id: 6, name: "Jane Smith", status: RegistrationStatus.Reproved },
];

const fillCpf = (cpf: string) => {
  cy.get("#cpf").clear().type(cpf);
};

const interceptSearchRequest = (cpf: string) => {
  cy.intercept("GET", `/registrations?cpf=${removeNonNumericCharacters(cpf)}`, [
    responseData,
  ]).as("searchEmployee");
};

const interceptApplicationsRequest = () => {
  cy.intercept("GET", "/registrations?", applicationsData).as(
    "getApplications"
  );
};

describe("Dashboard Page Test: Registration List", () => {
  beforeEach(() => {
    cy.visit(routes.dashboard);
    interceptApplicationsRequest();
    cy.wait(1000);
    cy.wait("@getApplications");
  });

  it("should display applications separated by status", () => {
    cy.get(`#column-content-${RegistrationStatus.Review}`)
      .find(`[data-card-type-id=card-${RegistrationStatus.Review}]`)
      .should("have.length", 1);

    cy.get(`#column-content-${RegistrationStatus.Approved}`)
      .find(`[data-card-type-id=card-${RegistrationStatus.Approved}]`)
      .should("have.length", 2);

    cy.get(`#column-content-${RegistrationStatus.Reproved}`)
      .find(`[data-card-type-id=card-${RegistrationStatus.Reproved}]`)
      .should("have.length", 3);
  });

  it("should refresh the application list", () => {
    cy.get("#refresh-button").click();
    cy.wait("@getApplications");
  });

  const testModalOpening = (
    cardStatus: RegistrationStatus,
    buttonStatus: RegistrationStatus
  ) => {
    cy.get(`[data-card-type-id=card-${cardStatus}]`)
      .first()
      .find(`#button-change-status-to-${buttonStatus}`)
      .click();
    cy.get("#modal-title").should("contain", "Você tem certeza?");
  };

  it("should open confirmation modal on approve action", () => {
    testModalOpening(RegistrationStatus.Review, RegistrationStatus.Approved);
  });

  it("should open confirmation modal on reprove action", () => {
    testModalOpening(RegistrationStatus.Review, RegistrationStatus.Reproved);
  });

  it("should open confirmation modal on review action", () => {
    testModalOpening(RegistrationStatus.Approved, RegistrationStatus.Review);
  });

  it("should approve application on modal confirmation", () => {
    const updatedApplication = { ...responseData, status: "approved" };

    cy.intercept("PATCH", "/registrations/2", {
      statusCode: 200,
      body: updatedApplication,
    }).as("updateApplication");

    cy.get(`[data-card-type-id=card-${RegistrationStatus.Approved}]`)
      .first()
      .find(`#button-change-status-to-${RegistrationStatus.Review}`)
      .click();
    cy.get("#confirm-button").click();

    cy.wait("@updateApplication").its("response.statusCode").should("eq", 200);
    cy.get("#0-toast").should("contain", "Status alterado com sucesso!");
  });
});

describe("Dashboard Page Test: Search for CPF", () => {
  beforeEach(() => {
    cy.visit(routes.dashboard);
    interceptApplicationsRequest();
    cy.wait("@getApplications");
  });

  it("should display the CPF input field correctly", () => {
    cy.get("#cpf")
      .should("be.visible")
      .and("have.attr", "placeholder", "Digite um CPF válido");
  });

  it("should accept a valid CPF", () => {
    fillCpf(validCpf);
    cy.get("#cpf").should("have.value", validCpf);
  });

  it("should execute a search request with a valid CPF", () => {
    interceptSearchRequest(validCpf);
    fillCpf(validCpf);
    cy.wait("@searchEmployee").its("response.statusCode").should("eq", 200);
  });

  it("should return corresponding data for a valid CPF", () => {
    interceptSearchRequest(validCpf);
    fillCpf(validCpf);
    cy.wait("@searchEmployee");
    cy.get(`#${responseData.id}`).should("exist");
  });

  it("should not execute a search request with an invalid CPF", () => {
    interceptSearchRequest(validCpf);
    fillCpf(invalidCpf);
    cy.get("#cpf")
      .should("have.value", invalidCpf)
      .and("have.attr", "aria-invalid", "true");
    cy.wait(500).then(() => {
      cy.get("@searchEmployee").should("not.exist");
    });
  });

  it("should show an error message for an invalid CPF", () => {
    fillCpf(invalidCpf);
    cy.get("#cpf").should("have.attr", "aria-invalid", "true");
    cy.get("#cpf-help").should("exist");
  });
});
