import { Destination } from "server/models";

export type Msg =
   | [
      "destination/create",
      {
        destination: Destination;
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | ["destination/popularlocations", {}];
