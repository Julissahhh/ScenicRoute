// app/src/update.ts
import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { Destination } from "server/models";

export default function update(
  message: Msg,
  apply: Update.ApplyMap<Model>,
  user: Auth.User
) {
  switch (message[0]) {
    case "destination/popularlocations":
      loadDestinations(user)
        .then((destinations) =>
          apply((model) => ({
            ...model,
            destinations
          }))
        );
      break;

    default:
      throw new Error(`Unhandled Auth message "${message[0]}"`);
  }
}

function loadDestinations(user: Auth.User) {
  return fetch(`/api/destinations`, {
    headers: Auth.headers(user)
  })
    .then((response) =>
      response.status === 200 ? response.json() : undefined
    )
    .then((json: unknown) => {
      if (Array.isArray(json)) {
        console.log("Destinations:", json);
        return json as Destination[];
      }
      return [];
    });
}