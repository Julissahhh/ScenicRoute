import{n as d,i as p,x as o,a as f,d as m,H as l}from"./header-1EF3gSf3.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u(c){return d({...c,state:!0,attribute:!1})}var g=Object.defineProperty,h=(c,e,t,v)=>{for(var r=void 0,i=c.length-1,n;i>=0;i--)(n=c[i])&&(r=n(e,t,r)||r);return r&&g(e,t,r),r};const s=class s extends p{constructor(){super(...arguments),this.locations=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.locations=t)}).catch(t=>console.error("Error fetching data:",t))}render(){return o`
      <div class="location-cards">
        ${this.locations.map(e=>o`
            <div class="location-card">
              <img src="${e.image}" alt="${e.name}" />
              <h2>${e.name}</h2>
              <p>${e.state}</p>
              <p>${e.type}</p>
            </div>
          `)}
      </div>
    `}};s.styles=f`
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
  `;let a=s;h([d()],a.prototype,"src");h([u()],a.prototype,"locations");customElements.define("location-card-element",a);m({"scenicroute-header":l,"location-card-element":a});l.initializeOnce();
