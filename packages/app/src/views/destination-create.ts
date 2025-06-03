import { html, css } from "lit";
import { define, Form, View, History } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";
import { Destination } from "server/models";
import { Types } from 'mongoose';


export class DestinationCreateElement extends View<Model, Msg> {
    static uses = define({
        "mu-form": Form.Element
    });

    constructor() {
        super("scenic:model");
    }

    render() {
        const empty: Partial<Destination> = {
        name: "",
        state: "",
        category: "",
        address: "",
        imageURL: "../images/Default_Trip.jpg"
        // _id is omitted entirely
    };

        return html`
      <main>
        <h2>Create New Destination</h2>
        <mu-form
          .init=${empty}
          @mu-form:submit=${this.handleSubmit}>
          <label>Name: <input name="name" required /></label>
          <label>State: <input name="state" required /></label>
          <label>Category: <input name="category" required /></label>
          <label>Address: <input name="address" required /></label>
        </mu-form>
      </main>
    `;
    }

    handleSubmit(event: Form.SubmitEvent<Destination>) {
        console.log("Form submitted!", event.detail);
        const newId = new Types.ObjectId().toString(); 
        const destination = {
        _id: newId,
        ...event.detail
    };
        console.log("Dispatching message with:", destination);

        this.dispatchMessage([
            "destination/create",
            {
                destination,
                onSuccess: () => {
                    console.log("SUCCESS CALLBACK TRIGGERED");
                    History.dispatch(this, "history/navigate", {
                        href: "/app/popularlocations"
                    });
                },
                onFailure: (err) => {
                    console.log("ERROR CALLBACK TRIGGERED:", err);
                    alert(`Failed to create destination: ${err.message}`);
                }
            }
        ]);
    }

    static styles = css`
        main {
            padding: var(--size-spacing-medium);
            max-width: 600px;
            margin: 0 auto;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        label {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        input {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 0.75rem;
            background-color: var(--color-primary);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    `;
}