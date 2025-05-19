import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

class LocationInputElement extends LitElement {
  @property({ type: Array }) locations: string[] = [];
  @property({ type: Number }) maxLocations: number = 10;

  handleAddInput() {
    if (this.locations.length < this.maxLocations) {
      this.locations = [...this.locations, ''];
    }
  }

  handleRemoveInput(index: number) {
    this.locations = this.locations.filter((_, i) => i !== index);
  }

  handleInputChange(e: Event, index: number) {
    const input = (e.target as HTMLInputElement).value;
    this.locations = [
      ...this.locations.slice(0, index),
      input,
      ...this.locations.slice(index + 1)
    ];
  }

  render() {
    return html`
      <div>
        ${this.locations.map(
          (location, index) => html`
            <div class="input-container">
              <input
                type="text"
                .value="${location}"
                @input="${(e: Event) => this.handleInputChange(e, index)}"
                placeholder="Enter location"
              />
              <img
                src="/icons/x.svg"
                alt="close icon"
                class="icon"
                @click="${() => this.handleRemoveInput(index)}"
              />
            </div>
          `
        )}
        <button @click="${this.handleAddInput}">Add Location</button>
      </div>
    `;
  }

  static styles = css`
    .input-container {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .input-container input {
      margin-right: 10px;
      padding: 5px;
      font-size: 1rem;
    }
    .icon {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
  `;

}

customElements.define('location-input', LocationInputElement);
