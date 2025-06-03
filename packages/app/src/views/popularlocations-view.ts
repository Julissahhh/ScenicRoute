// app/src/views/home-view.ts
import { css, html } from "lit";
import { View } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";
import reset from "../styles/reset.css";

export class PopularViewElement extends View<Model, Msg> {

    render() {
        return html`
      <main>
        <location-card></location-card>
        <div class="button-container">
          <a href="/app/destination/new" class="add-button">
            + Add New Destination
          </a>
        </div>
      </main>
    `;
    }

    static styles = [
        reset.styles,
        css`
          :host {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: var(--size-spacing-medium);
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          location-card {
            flex: 1;
          }

          .button-container {
            display: flex;
            justify-content: center;
            padding: 2rem;
            position: sticky;
            bottom: 0;
            // background: linear-gradient(to top, black 50%, transparent);
          }

          .add-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background-color: var(--color-background-header);
            color: white;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: fit-content;
            min-width: 250px;
          }

          .add-button:hover {
            background-color: var(--color-accent-inverted);
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          }

          .add-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `
    ];
}