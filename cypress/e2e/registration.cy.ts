import routes from "~/router/routes";

describe("Registration Page Test", () => {
  const formData = {
    name: "John Doe",
    email: "john.doe@example.com",
    cpf: "642.771.680-86",
    admissionDate: "2024-09-01",
  };

  beforeEach(() => {
    cy.visit(routes.dashboard);
    cy.contains("button", "Nova Admissão").click();
  });

  const fillForm = () => {
    cy.get("#employeeName").type(formData.name);
    cy.get("#email").type(formData.email);
    cy.get("#cpf").type(formData.cpf);
    cy.get("#admissionDate").type(formData.admissionDate);
  };

  it("should display the form fields correctly", () => {
    cy.get("#employeeName")
      .should("be.visible")
      .and("have.attr", "placeholder", "Nome");
    cy.get("#email")
      .should("be.visible")
      .and("have.attr", "placeholder", "Email");
    cy.get("#cpf")
      .should("be.visible")
      .and("have.attr", "placeholder", "Digite um CPF válido");
    cy.get("#admissionDate").should("be.visible");
  });

  it("should enable the submit button when all fields are filled", () => {
    fillForm();
    cy.get('button[type="submit"]').should("not.be.disabled");
  });

  it("should submit the form successfully and show a success message", () => {
    cy.intercept("POST", "/registrations", {
      statusCode: 201,
      body: { message: "Admissão criada com sucesso!" },
    }).as("createEmployee");

    fillForm();

    cy.get('button[type="submit"]').click();
    cy.wait("@createEmployee");

    cy.get("#0-toast").should("contain", "Admissão criada com sucesso!");
  });

  it("should redirect to /dashboard after successful submission", () => {
    cy.intercept("POST", "/registrations", {
      statusCode: 201,
      body: { message: "Admissão criada com sucesso!" },
    }).as("createEmployee");

    fillForm();

    cy.get('button[type="submit"]').click();
    cy.wait("@createEmployee");

    cy.url().should("include", "/dashboard");
    cy.get("#0-toast").should("contain", "Admissão criada com sucesso!");
  });

  it("should show validation messages when fields are invalid", () => {
    cy.get('button[type="submit"]').should("be.disabled");

    cy.get("#admissionDate").click();
    cy.get("#employeeName").type("A B");
    cy.get("#email").type("s@example..com");
    cy.get("#cpf").type("00000000000");

    cy.get("#employeeName-help").should("exist");
    cy.get("#email-help").should("exist");
    cy.get("#cpf-help").should("exist");
    cy.get("#admissionDate-help").should("exist");

    cy.get('button[type="submit"]').should("be.disabled");
  });
});
