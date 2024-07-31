import { IEvent } from "src/interface";

export interface eventsState {
  eventsNext: IEvent[],
  eventsPast: IEvent[],
  members: string[],
  activeFilter: 'type' | 'visit' | null,
  filters: {
    faculties: string[],
    types: string[],
    visits: string[],
  },
  isLoading: boolean,
  isSuccess: boolean,
  errorMessage: string | null,
}

export interface adminState {
  adminFaculty: string,
  isLoading: boolean,
  isSuccess: boolean,
  errorMessage: string | null,
}