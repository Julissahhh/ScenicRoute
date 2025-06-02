import { css, html } from "lit";
import { View } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";
import { Destination } from "server/models";

export class LocationCardElement extends View<Model, Msg> {
  constructor() {
    super("scenic:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["destination/popularlocations", {}]);
  }

  render() {
    console.log('Current model: AHHHHHHHH', this.model);
    const locations: Destination[] = this.model.destinations ?? [];
    console.log('Locations data:', locations);



    return html`
      <div class="location-cards">
        ${locations.map(
          (location) => html`
            <div class="location-card">
              <img src="${location.imageURL}" alt="${location.name}" />
              <h2>${location.name}</h2>
              <p>${location.state}</p>
              <p>${location.category}</p>
            </div>
          `
        )}
      </div>
    `;
  }

  static styles = css`
    .location-cards {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .location-card {
      border: 1px solid #ccc;
      padding: 1rem;
      text-align: center;
      width: 300px;
      background-color: #f9f9f9;
    }

    .location-card img {
      width: 100%;
      height: auto;
    }

    .location-card h2 {
      font-size: 1.5rem;
    }
  `;
}
