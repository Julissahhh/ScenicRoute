// app/src/componenets/locationinput.ts
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class LocationInputElement extends LitElement {
  @property({ type: Array }) locations: string[] = ['', '']; // Initialize with two empty strings
  @property({ type: Number }) maxLocations: number = 10; // 2 permanent + 8 additional

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
      <div class="locations-container">
        ${this.locations.map(
          (location, index) => html`
            <div class="input-container">
              <span class="location-number">${index}.</span>
              <input
                type="text"
                .value="${location}"
                @input="${(e: Event) => this.handleInputChange(e, index)}"
                placeholder="${index === 0 ? 'Starting location' : 'Enter location'}"
                ?disabled=${false}
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
        ${this.locations.length < this.maxLocations ? html`
          <div class="button-container">
            <button class="add-location" @click="${this.handleAddInput}">Add Location</button>
          ` : ''}
          </div>
      </div>
    `;
  }

  static styles = css`
  .locations-container {
      padding: 5px;
      max-height: 250px; /* Adjust this value as needed */
      overflow-y: auto;
      width: 100%;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; 
    }
  .location-number {
    padding-right: 15px;
    min-width: 20px;
    text-align: right;
  }

  .input-container {
    display: flex;
    align-items: center;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  .input-container input {
    margin-right: 10px;
    padding: 4px;
    font-size: 1rem;
    font-family: var(--font-family-dangrek);
    border: 1px solid #ddd;
    border-radius: 5px;
    flex: 1;
  }

  .input-container input:disabled {
    background-color: #f5f5f5;
    border-color: #eee;
  }

  .icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .icon:hover {
    opacity: 1;
  }

  .button-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .add-location {
    padding: 5px 10px;
    background-color: #FFFFFF;
    color: black;
    border: 1px solid #ddd;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: var(--font-family-dangrek);
    margin-top: 15px;
    transition: background-color 0.3s;
    width: fit-content;
  }

  .add-location:hover {
    background-color: #C6C6C6;
  }

  .add-location:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
}
