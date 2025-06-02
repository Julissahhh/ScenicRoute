import { Destination } from "server/models";

export interface Model {
  destinations?: Destination[];
}

export const init: Model = {};