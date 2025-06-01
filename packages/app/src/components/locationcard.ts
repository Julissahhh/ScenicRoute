import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { Auth, Observer } from "@calpoly/mustang";


interface Location {
    name: string;
    imageURL: string;
    state: string;
    category: string;
}

export class LocationCardElement extends LitElement {

    @property({ type: String }) src = "/api/destinations";


    @state() locations: Location[] = [];

    _authObserver = new Observer<Auth.Model>(this, "scenic:auth");
    _user?: Auth.User;

    connectedCallback() {
        super.connectedCallback();
        this._authObserver.observe((auth: Auth.Model) => {
            this._user = auth.user;
            if (this.src) {
                this.hydrate(this.src);
            }
        });
    }

    get authorization(): HeadersInit | undefined {
        if (this._user?.authenticated) {
            return {
                Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).token}`
            };
        }
        return undefined;
    }

    hydrate(src: string) {
        fetch(src, {
            headers: this.authorization ?? {}
        })
            .then((res) => res.json())
            .then((json: Location[]) => {
                if (json) {
                    console.log("Fetched data:", json);
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

