import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

interface Location {
    name: string;
    imageURL: string;
    state: string;
    category: string;
  }

export class LocationCardElement extends LitElement {
  @property() src?: string;

  @state() locations: Location[] = [];

  connectedCallback() {
    super.connectedCallback();
    if (this.src) {
      this.hydrate(this.src);
    }
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: Location[]) => {
        if (json) {
          this.locations = json; 
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    return html`
      <div class="location-cards">
        ${this.locations.map(
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

  // Styles for the location card component
  static styles = css`
    .location-cards {
      gap: 1rem;
      flex-wrap: wrap;
    }
    .location-card {
      border: 1px solid #ccc;
      padding: 1rem;
      text-align: center;
      width: 500px;
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

customElements.define('location-card-element', LocationCardElement);