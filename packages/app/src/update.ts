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
        // In the "destination/create" case in update.ts
        case "destination/create":
            console.log("CREATE DESTINATION MESSAGE RECEIVED:", message[1]);
            console.log("Current user:", user); // Add this to verify user auth
            createDestination(message[1], user)
                .then((destination) => {
                    console.log("API SUCCESS:", destination);
                    apply((model) => ({
                        ...model,
                        destinations: [...(model.destinations ?? []), destination]
                    }));
                    message[1].onSuccess?.();
                })
                .catch((err) => {
                    console.error("API FAILED:", err);
                    message[1].onFailure?.(err);
                });
            break;

        default:
            const unhandled: never = message[0];
            throw new Error(`Unhandled message "${unhandled}"`);
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

function createDestination(msg: { destination: Destination }, user: Auth.User) {
    console.log("Making API call with:", msg.destination);

    return fetch("/api/destinations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...Auth.headers(user)
        },
        body: JSON.stringify(msg.destination)
    })
        .then((res) => {
            console.log("API RESPONSE STATUS:", res.status);
            if (res.status === 201) return res.json();
            return res.text().then(text => {
                throw new Error(`API Error ${res.status}: ${text}`);
            });
        })
        .then(json => {
            console.log("API RESPONSE JSON:", json);
            return json;
        });
}
