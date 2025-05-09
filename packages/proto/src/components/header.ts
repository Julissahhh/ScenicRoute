import { Events } from "@calpoly/mustang";
import { css, html, LitElement } from "lit";
import reset from "../styles/reset.css.ts";
import { property } from "lit/decorators.js";

function toggleDarkMode(ev: InputEvent) {
  const target = ev.target as HTMLInputElement;
  const checked = target.checked;

  // Save preference to localStorage
  localStorage.setItem('darkMode', checked.toString());

  Events.relay(ev, "dark-mode", { checked });
}

export class HeaderElement extends LitElement {
  @property({ type: String }) title = 'Scenic Route...';
  @property({ type: String }) subtitle = 'Find must-see locations on the way to your desired destination';
  @property({ type: Boolean }) darkMode = false;

  firstUpdated() {
    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
      this.darkMode = true;
      this.shadowRoot?.querySelector('#dark-mode-toggle')?.setAttribute('checked', '');
      document.body.classList.add('dark-mode');
    }
  }

  override render() {
    return html`
      <header>
        <div class="header-text">
          <h1>${this.title}</h1>
          <p>${this.subtitle}</p>
        </div>
        <div class="right-section">
          <nav class="page-links">
            <a href="roadtripideas.html">RoadTrip Ideas</a>
            <a href="person.html">Planned Trips</a>
            <a href="person.html">Log in/ Sign Up</a>
          </nav>
          <div class="dark-mode-toggle">
            <label @change=${toggleDarkMode}>
              <input 
                type="checkbox" 
                id="dark-mode-toggle" 
                autocomplete="off" 
                ?checked=${this.darkMode} 
              />
              Dark mode
            </label>
          </div>
        </div>
      </header>
    `;
  }

  static styles = [
    reset.styles,
    css`
    :host {
      display: block;
      width: 100%;
      position: sticky;
      top: 0;
      background-color: var(--color-background-header);
      z-index: 1000;
    }

    header {
      display: flex;
      align-items: center; /* Center items vertically */
      justify-content: space-between;
      width: 100%;
      padding: var(--size-spacing-large);
      color: var(--color-text-inverted);
      box-sizing: border-box;
      gap: var(--size-spacing-medium);
    }

    .header-text {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .header-content {
      display: flex;
      align-items: center;
      flex-grow: 1;
      gap: var(--size-spacing-large);
    }

    .right-section {
      display: flex;
      align-items: end;
      flex-direction: column;

    }

    .page-links {
      display: flex;
      gap: var(--size-spacing-medium);
      align-items: center;
    }

    header h1 {
      margin: 0;
      font-size: var(--size-type-xxlarge);
      font-style: oblique;
      line-height: 1;
      font-weight: var(--font-weight-bold);
      font-family: var(--font-family-poetsen);
    }

    header p {
      margin: 0;
      padding-top: var(--size-spacing-xsmall);
      font-family: var(--font-family-dangrek);
    }

    a {
      color: white;
      font-family: var(--font-family-dangrek);
      text-decoration: none;
      padding: var(--size-spacing-xsmall);
    }

    a:hover {
      text-decoration: underline;
    }

    .dark-mode-toggle {
      display: flex;
      align-items: center;
    }

    .dark-mode-toggle label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .dark-mode-toggle input {
      cursor: pointer;
    }
  `
  ];

  static initializeOnce() {
    function toggleDarkMode(page: HTMLElement, checked: boolean) {
      page.classList.toggle("dark-mode", checked);
    }

    document.body.addEventListener("dark-mode", (event) => {
      const customEvent = event as CustomEvent;
      toggleDarkMode(document.body, customEvent.detail?.checked);
    });
  }
}

customElements.define('scenicroute-header', HeaderElement);