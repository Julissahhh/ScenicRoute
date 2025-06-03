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
    const locations: Destination[] = this.model.destinations ?? [];
    
    return html`
      <div class="location-cards">
        ${locations.map((location) => html`
          <article class="location-card">
            <img src="${location.imageURL}" alt="${location.name}" />
            <div class="card-content">
              <h2>${location.name}</h2>
              <div class="meta">
                <span class="state">${location.state}</span>
                <span class="category">${location.category}</span>
              </div>
            </div>
          </article>
        `)}
      </div>
    `;
  }

  static styles = css`
    .location-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      padding: 2rem;
      width: 100%;
      box-sizing: border-box;
      max-width: 1400px;
      margin: 0 auto;
    }

    .location-card {
      display: flex;
      flex-direction: column;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      overflow: hidden;
      background: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .location-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    .location-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-bottom: 1px solid #e0e0e0;
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .location-card h2 {
      font-size: 1.25rem;
      margin: 0;
      color: var(--color-text-primary);
    }

    .meta {
      display: flex;
      gap: 1rem;
      font-size: 0.875rem;
      color: var(--color-text-secondary);
    }

    .state {
      font-weight: 600;
    }

    .category {
      color: var(--color-primary);
    }

    @media (max-width: 768px) {
      .location-cards {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 1rem;
      }
    }
  `;
}