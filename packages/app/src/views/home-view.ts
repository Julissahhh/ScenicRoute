// app/src/views/home-view.ts
import { css, html, LitElement } from "lit";
import reset from "../styles/reset.css";

export class HomeViewElement extends LitElement {

    render() {
        return html`
      <main>
        <section class="AboutTrip">
          <div class="box-left">
            <h2>Tell us about your trip!</h2>
            <location-input></location-input>
          </div>
          <div class="overlay-box">
            <h2>Interests and budget</h2>
          </div>
        </section>
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


  .AboutTrip {
  z-index: 0;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white; /* Optional: so text stands out better */
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7); /* Optional for readability */
}
.AboutTrip::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('/icons/RoadTrip.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5; /* <-- This ONLY affects the image */
  z-index: 0;
}


    .overlay-box {
  position: absolute;
  top: 10%; /* Adjust position for the first box */
  right: 10%;
  padding: 20px;
  max-width: 500px; /* Control the box size */
  z-index: 1; /* Make sure it's above the image */
  
}

.box-left {
  position: absolute;
  top: 25%; /* Same position as the first box */
  left: 10%; /* Align it to the left */
  padding: 20px;
  max-width: 500px; /* Control the box size */
  max-height: 350px;
  z-index: 1; /* Make sure it's above the image */
  background-color: rgba(237, 115, 0); /* Orange background */
  border-radius: 8px;
  font-family: var(--font-family-lexend);
  font-weight: var(--font-weight-bold);
  color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.overlay-box:nth-child(2) {
  top: 25%; /* Adjust position for the second box */
  right: 10%;
  background-color: rgba(237, 115, 0); /* Maintain same background */
  width: 500px;
  height: 350px;
  border-radius: 8px;
  font-family: var(--font-family-lexend);
  font-weight: var(--font-weight-bold);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
}

.overlay-box h2 {
  color: #FFFF; /* New color for the text */
  font-family: var(--font-family-poetsen);
}

body.dark-mode {
  --color-background-page: rgb(217, 154, 95);
  --color-text: rgb(240, 240, 223);
  --color-background-card: black;
  --color-accent: rgba(173, 84, 0);
  --color-background-header: var(--color-accent);
  --color-text-control: rgb(51 51 51);
  --color-text-control-inverted: var(--color-background-page);
}

body.dark-mode .overlay-box {
  background-color: rgba(173, 84, 0); /* Dark mode background */
}

body.dark-mode .box-left {
  background-color: rgba(173, 84, 0); /* Dark mode background */
}

    .icon-left {
      width: 1.5em;
      height: 1.5em;
      margin-right: var(--size-spacing-small);
    }

    h2 {
      font-family: var(--font-family-dangrek);
      color: var(--color-text-header);
      margin-bottom: var(--size-spacing-medium);
    }
  `];
}