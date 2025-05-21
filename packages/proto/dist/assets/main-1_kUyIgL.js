import{i as u,x as s,a as f,n as d,d as g,b as m,H as p}from"./header-CbxHXgdm.js";var x=Object.defineProperty,h=(c,o,t,i)=>{for(var n=void 0,e=c.length-1,l;e>=0;e--)(l=c[e])&&(n=l(o,t,n)||n);return n&&x(o,t,n),n};const r=class r extends u{constructor(){super(...arguments),this.locations=["",""],this.maxLocations=10}handleAddInput(){this.locations.length<this.maxLocations&&(this.locations=[...this.locations,""])}handleRemoveInput(o){this.locations=this.locations.filter((t,i)=>i!==o)}handleInputChange(o,t){const i=o.target.value;this.locations=[...this.locations.slice(0,t),i,...this.locations.slice(t+1)]}render(){return s`
      <div class="locations-container">
        ${this.locations.map((o,t)=>s`
            <div class="input-container">
              <span class="location-number">${t}.</span>
              <input
                type="text"
                .value="${o}"
                @input="${i=>this.handleInputChange(i,t)}"
                placeholder="${t===0?"Starting location":"Enter location"}"
                ?disabled=${!1}
              />
                <img
                  src="/icons/x.svg"
                  alt="close icon"
                  class="icon"
                  @click="${()=>this.handleRemoveInput(t)}"
                />
            </div>
          `)}
        ${this.locations.length<this.maxLocations?s`
          <div class="button-container">
            <button class="add-location" @click="${this.handleAddInput}">Add Location</button>
          `:""}
          </div>
      </div>
    `}};r.styles=f`
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
`;let a=r;h([d({type:Array})],a.prototype,"locations");h([d({type:Number})],a.prototype,"maxLocations");g({"scenicroute-header":p,"mu-auth":m.Provider,"location-input":a});p.initializeOnce();
