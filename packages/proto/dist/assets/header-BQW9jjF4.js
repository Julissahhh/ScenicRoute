import{i as h,O as m,e as u,x as d,c as f,a as k,n as l,r as c}from"./state-D9QQRvWg.js";var v=Object.defineProperty,r=(a,t,e,i)=>{for(var o=void 0,s=a.length-1,g;s>=0;s--)(g=a[s])&&(o=g(t,e,o)||o);return o&&v(t,e,o),o};function y(a){const e=a.target.checked;localStorage.setItem("darkMode",e.toString()),u.relay(a,"dark-mode",{checked:e})}const p=class p extends h{constructor(){super(...arguments),this.title="Scenic Route...",this.subtitle="Find must-see locations on the way to your desired destination",this.darkMode=!1,this.menuOpen=!1,this._authObserver=new m(this,"scenic:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username):(this.loggedIn=!1,this.userid=void 0)})}toggleMenu(t){t.stopPropagation(),this.menuOpen=!this.menuOpen,this.requestUpdate()}closeMenu(){this.menuOpen=!1,this.requestUpdate()}firstUpdated(){var e,i;localStorage.getItem("darkMode")==="true"&&(this.darkMode=!0,(i=(e=this.shadowRoot)==null?void 0:e.querySelector("#dark-mode-toggle"))==null||i.setAttribute("checked",""),document.body.classList.add("dark-mode")),document.addEventListener("click",()=>{this.menuOpen&&this.closeMenu()})}renderSignOutButton(){return d`
    <button
      @click=${t=>{u.relay(t,"auth:message",["auth/signout"]),this.closeMenu()}}
    >
      Sign Out
    </button>
  `}renderSignInButton(){return d`
    <a href="login.html" @click=${this.closeMenu}>
      Sign In
    </a>
  `}render(){return d`
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
                @change=${y}
              />
              Dark mode
            </label>
          </div>
        </div>
      </div>
          </nav>
        </div>
      </header>
    `}static initializeOnce(){function t(e,i){e.classList.toggle("dark-mode",i)}document.body.addEventListener("dark-mode",e=>{var o;const i=e;t(document.body,(o=i.detail)==null?void 0:o.checked)})}};p.styles=[f.styles,k`
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
    `];let n=p;r([l({type:String})],n.prototype,"title");r([l({type:String})],n.prototype,"subtitle");r([l({type:Boolean})],n.prototype,"darkMode");r([c()],n.prototype,"menuOpen");r([c()],n.prototype,"loggedIn");r([c()],n.prototype,"userid");customElements.define("scenicroute-header",n);export{n as H};
