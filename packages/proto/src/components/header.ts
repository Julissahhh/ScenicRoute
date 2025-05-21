import { Events } from "@calpoly/mustang";
import { css, html, LitElement } from "lit";
import reset from "../styles/reset.css.ts";
import { property, state } from "lit/decorators.js";
import { Auth, Observer } from "@calpoly/mustang";

function toggleDarkMode(ev: InputEvent) {
  const target = ev.target as HTMLInputElement;
  const checked = target.checked;
  localStorage.setItem('darkMode', checked.toString());
  Events.relay(ev, "dark-mode", { checked });
}

export class HeaderElement extends LitElement {
  @property({ type: String }) title = 'Scenic Route...';
  @property({ type: String }) subtitle = 'Find must-see locations on the way to your desired destination';
  @property({ type: Boolean }) darkMode = false;
  @state() private menuOpen = false;

  _authObserver = new Observer<Auth.Model>(this, "scenic:auth");

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user && user.authenticated ) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }

  private toggleMenu(e: Event) {
    e.stopPropagation(); // Prevent immediate document click handler
    this.menuOpen = !this.menuOpen;
    this.requestUpdate();
  }

  private closeMenu() {
    this.menuOpen = false;
    this.requestUpdate();
  }

  firstUpdated() {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
      this.darkMode = true;
      this.shadowRoot?.querySelector('#dark-mode-toggle')?.setAttribute('checked', '');
      document.body.classList.add('dark-mode');
    }

    // Close menu when clicking outside
    document.addEventListener('click', () => {
      if (this.menuOpen) {
        this.closeMenu();
      }
    });
  }

  override render() {
    return html`
      <header>
        <div class="header-text">
          <a href="index.html">
            <h1>${this.title}</h1>
          </a>
          <p>${this.subtitle}</p>
        </div>
        <div class="right-section">
          <nav class="page-links">
            <a href="roadtripideas.html">RoadTrip Ideas</a>
            <div class="menu-container" @click=${(e: Event) => e.stopPropagation()}>
        <img 
          src="/icons/menu-icon.svg" 
          alt="menu icon" 
          class="icon-right" 
          @click=${this.toggleMenu}
        />
        <div class="dropdown-menu ${this.menuOpen ? 'open' : ''}">
          <a href="person.html" @click=${this.closeMenu}>Planned Trips</a>
          <a href="login.html" @click=${this.closeMenu}>Log in/Sign Up</a>
          <div class="dropdown-dark-mode">
            <label>
              <input 
                type="checkbox" 
                id="dropdown-dark-mode-toggle" 
                autocomplete="off" 
                ?checked=${this.darkMode} 
                @change=${toggleDarkMode}
              />
              Dark mode
            </label>
          </div>
        </div>
      </div>
          </nav>
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
        align-items: center;
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

      .right-section {
        display: flex;
        align-items: center;
      }

      .page-links {
        display: flex;
        gap: var(--size-spacing-large);
        align-items: center;
        position: relative;
      }

      .menu-container {
        position: relative;
        display: inline-block;
      }

      .dropdown-menu {
      position: absolute;
      right: 0;
      top: calc(100% + 5px);
      background-color: var(--color-background-header);
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.7);
      z-index: 1001;
      border-radius: 4px;
      overflow: hidden;
      display: block;
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity 0.2s ease, transform 0.2s ease;
      pointer-events: none;
    }

    .dropdown-menu.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

      .dropdown-menu a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        font-family: var(--font-family-dangrek);
      }

      .dropdown-menu a:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .dropdown-dark-mode {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }

      .dropdown-dark-mode:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .dropdown-dark-mode label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        width: 100%;
      }

      .dropdown-dark-mode input {
        cursor: pointer;
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
        color: #C6C6C6;
      }

      .icon-right {
        width: 3em;
        height: 3em;
        color: white;
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