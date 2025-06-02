// app/src/main.ts
import {
    Auth,
    define,
    History,
    Switch,
    Store
} from "@calpoly/mustang";
import { html } from "lit";
import { Msg } from "./messages.ts";
import { Model, init } from "./model.ts";
import update from "./update";
import { HeaderElement } from "./components/header.ts";
import { LocationInputElement } from "./components/locationinput.ts";
import { LocationCardElement } from "./components/locationcard.ts";
import { HomeViewElement } from "./views/home-view";
import { PopularViewElement } from "./views/popularlocations-view.ts";


const routes = [
    {
        path: "/app/popularlocations",
        view: () => html`
      <popularlocations-view></popularlocations-view>
    `
    },
    {
        path: "/app",
        view: () => html`
      <home-view></home-view>
    `
    },
    {
        path: "/",
        redirect: "/app"
    }
];

define({
    "mu-auth": Auth.Provider,
    "mu-history": History.Provider,
    "mu-switch": class AppSwitch extends Switch.Element {
        constructor() {
            super(routes, "scenic:history", "scenic:auth");
        }
    },
    "mu-store": class AppStore
        extends Store.Provider<Model, Msg> {
        constructor() {
            super(update, init, "scenic:auth");
        }
    },
    "scenicroute-header": HeaderElement,
    "location-input": LocationInputElement,
    "location-card": LocationCardElement,
    "home-view": HomeViewElement,
    "popularlocations-view": PopularViewElement,
});

