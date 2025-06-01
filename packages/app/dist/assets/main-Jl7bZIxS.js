import{i as u,O as $,e as z,x as r,a as g,r as m,n as c,b as O,d as _,_ as I,h as C,c as A}from"./reset.css-BmxsL55m.js";var F=Object.defineProperty,l=(a,t,e,i)=>{for(var o=void 0,n=a.length-1,d;n>=0;n--)(d=a[n])&&(o=d(t,e,o)||o);return o&&F(t,e,o),o};function j(a){const e=a.target.checked;localStorage.setItem("darkMode",e.toString()),z.relay(a,"dark-mode",{checked:e})}const x=class x extends u{constructor(){super(...arguments),this.title="Scenic Route...",this.subtitle="Find must-see locations on the way to your desired destination",this.darkMode=!1,this.menuOpen=!1,this._authObserver=new $(this,"scenic:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}toggleMenu(t){t.stopPropagation(),this.menuOpen=!this.menuOpen,this.requestUpdate()}closeMenu(){this.menuOpen=!1,this.requestUpdate()}firstUpdated(){var e,i;localStorage.getItem("darkMode")==="true"&&(this.darkMode=!0,(i=(e=this.shadowRoot)==null?void 0:e.querySelector("#dark-mode-toggle"))==null||i.setAttribute("checked",""),document.body.classList.add("dark-mode")),document.addEventListener("click",()=>{this.menuOpen&&this.closeMenu()})}renderSignOutButton(){return r`
    <button
      @click=${t=>{z.relay(t,"auth:message",["auth/signout"]),this.closeMenu()}}
    >
      Sign Out
    </button>
  `}renderSignInButton(){return r`
    <a href="login.html" @click=${this.closeMenu}>
      Sign In
    </a>
  `}render(){return r`
      <header>
        <div class="header-text">
          <a href="/">
            <h1>${this.title}</h1>
          </a>
          <p>${this.subtitle}</p>
        </div>
        <div class="right-section">
          <nav class="page-links">
            <a href="/app/popularlocations">RoadTrip Ideas</a>
            <div class="menu-container" @click=${t=>t.stopPropagation()}>
        <img 
          src="/icons/menu-icon.svg" 
          alt="menu icon" 
          class="icon-right" 
          @click=${this.toggleMenu}
        />
        <div class="dropdown-menu ${this.menuOpen?"open":""}">
        <a slot="actuator">
          Hello, ${this.userid||"traveler"}
        </a>
          <a href="person.html" @click=${this.closeMenu}>Planned Trips</a>
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
          <div class="dropdown-dark-mode">
            <label>
              <input 
                type="checkbox" 
                id="dropdown-dark-mode-toggle" 
                autocomplete="off" 
                ?checked=${this.darkMode} 
                @change=${j}
              />
              Dark mode
            </label>
          </div>
        </div>
      </div>
          </nav>
        </div>
      </header>
    `}static initializeOnce(){function t(e,i){e.classList.toggle("dark-mode",i)}document.body.addEventListener("dark-mode",e=>{var o;const i=e;t(document.body,(o=i.detail)==null?void 0:o.checked)})}};x.styles=[g`
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

      .dropdown-menu button {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        font-family: var(--font-family-dangrek);
        background: none;
        border: none;
        text-align: left;
        width: 100%;
        cursor: pointer;
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
    `];let s=x;l([c({type:String})],s.prototype,"title");l([c({type:String})],s.prototype,"subtitle");l([c({type:Boolean})],s.prototype,"darkMode");l([m()],s.prototype,"menuOpen");l([m()],s.prototype,"loggedIn");l([m()],s.prototype,"userid");var P=Object.defineProperty,M=(a,t,e,i)=>{for(var o=void 0,n=a.length-1,d;n>=0;n--)(d=a[n])&&(o=d(t,e,o)||o);return o&&P(t,e,o),o};const v=class v extends u{constructor(){super(...arguments),this.locations=["",""],this.maxLocations=10}handleAddInput(){this.locations.length<this.maxLocations&&(this.locations=[...this.locations,""])}handleRemoveInput(t){this.locations=this.locations.filter((e,i)=>i!==t)}handleInputChange(t,e){const i=t.target.value;this.locations=[...this.locations.slice(0,e),i,...this.locations.slice(e+1)]}render(){return r`
      <div class="locations-container">
        ${this.locations.map((t,e)=>r`
            <div class="input-container">
              <span class="location-number">${e}.</span>
              <input
                type="text"
                .value="${t}"
                @input="${i=>this.handleInputChange(i,e)}"
                placeholder="${e===0?"Starting location":"Enter location"}"
                ?disabled=${!1}
              />
                <img
                  src="/icons/x.svg"
                  alt="close icon"
                  class="icon"
                  @click="${()=>this.handleRemoveInput(e)}"
                />
            </div>
          `)}
        ${this.locations.length<this.maxLocations?r`
          <div class="button-container">
            <button class="add-location" @click="${this.handleAddInput}">Add Location</button>
          `:""}
          </div>
      </div>
    `}};v.styles=g`
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
`;let p=v;M([c({type:Array})],p.prototype,"locations");M([c({type:Number})],p.prototype,"maxLocations");var T=Object.defineProperty,S=(a,t,e,i)=>{for(var o=void 0,n=a.length-1,d;n>=0;n--)(d=a[n])&&(o=d(t,e,o)||o);return o&&T(t,e,o),o};const y=class y extends u{constructor(){super(...arguments),this.src="/api/destinations",this.locations=[],this._authObserver=new $(this,"scenic:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{this._user=t.user,this.src&&this.hydrate(this.src)})}get authorization(){var t;if((t=this._user)!=null&&t.authenticated)return{Authorization:`Bearer ${this._user.token}`}}hydrate(t){fetch(t,{headers:this.authorization??{}}).then(e=>e.json()).then(e=>{e&&(console.log("Fetched data:",e),this.locations=e)}).catch(e=>console.error("Error fetching data:",e))}render(){return r`
      <div class="location-cards">
        ${this.locations.map(t=>r`
            <div class="location-card">
              <img src="${t.imageURL}" alt="${t.name}" />
              <h2>${t.name}</h2>
              <p>${t.state}</p>
              <p>${t.category}</p>
            </div>
          `)}
      </div>
    `}};y.styles=g`
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
  `;let h=y;S([c({type:String})],h.prototype,"src");S([m()],h.prototype,"locations");const k=class k extends u{render(){return r`
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
    `}};k.styles=[O.styles,g`
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
  `];let b=k;const w=class w extends u{render(){return r`
      <main>
        <location-card-element src="/api/destinations"></location-card-element>
      </main>
    `}};w.styles=[O.styles,g`
    :host {
      display: block;
      padding: var(--size-spacing-medium);
    }

  `];let f=w;const L=[{path:"/app/popularlocations",view:()=>r`
      <popularlocations-view></popularlocations-view>
    `},{path:"/app",view:()=>r`
      <home-view></home-view>
    `},{path:"/",redirect:"/app"}];_({"mu-auth":A.Provider,"mu-history":C.Provider,"scenicroute-header":s,"location-input":p,"location-card":h,"home-view":b,"popularlocations-view":f,"mu-switch":class extends I.Element{constructor(){super(L,"scenic:history","scenic:auth")}}});
