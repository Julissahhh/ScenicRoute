// app/src/views/home-view.ts
import { css, html } from "lit";
import { View } from "@calpoly/mustang";
import { Model } from "../model";
import { Msg } from "../messages";
import reset from "../styles/reset.css";

export class PopularViewElement extends View<Model, Msg>  {

    render() {
        return html`
      <main>
        <location-card></location-card>
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