import { useMemo } from "react";
import { Registration, RegistrationStatus } from "~/types";

/**
 * Filters registrations by the specified status.
 *
 * @param {RegistrationStatus} status - The status to filter registrations by.
 * @param {Registration[] | null} data - The array of registrations or null.
 * @returns {Registration[]} An array of registrations that match the specified status.
 */
function filterRegistrationsByStatus(
  status: RegistrationStatus,
  data: Registration[] | null
) {
  return data?.filter((item) => item.status === status) || [];
}

/**
 * Initial data structure for holding registrations categorized by their status.
 *
 * @constant
 * @type {Record<RegistrationStatus, Registration[]>}
 */
const initialData: Record<RegistrationStatus, Registration[]> = {
  [RegistrationStatus.Approved]: [],
  [RegistrationStatus.Reproved]: [],
  [RegistrationStatus.Review]: [],
};

/**
 * A custom hook that memoizes registrations categorized by their status.
 *
 * @param {Registration[] | null} data - The array of registrations or null.
 * @returns {Record<RegistrationStatus, Registration[]>} An object containing arrays of registrations categorized by status.
 */
export function useMemoizedRegistrationsByStatus(data: Registration[] | null) {
  return useMemo(() => {
    const dataByStatus = initialData;

    Object.values(RegistrationStatus).forEach((value: RegistrationStatus) => {
      dataByStatus[value] = filterRegistrationsByStatus(value, data);
    });

    return dataByStatus;
  }, [data]);
}
