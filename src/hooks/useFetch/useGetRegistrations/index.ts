import { Registration } from "~/types";
import { useFetch } from "..";

export function useGetRegistrations() {
  return useFetch<Registration[]>({
    method: 'GET',
    path: '/registrations'
  })
}