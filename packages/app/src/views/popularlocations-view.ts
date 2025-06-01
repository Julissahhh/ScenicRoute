// app/src/views/home-view.ts
import { css, html, LitElement } from "lit";
import reset from "../styles/reset.css";

export class PopularViewElement extends LitElement {

    render() {
        return html`
      <main>
        <location-card-element src="/api/destinations"></location-card-element>
      </main>
    `;
    }

    static styles = [
        reset.styles,
        css`
    :host {
      display: block;
      padding: var(--size-spacing-medium);
    }

  `];
}