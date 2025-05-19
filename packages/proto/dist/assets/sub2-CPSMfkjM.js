import{i as h,x as o,a as p,r as f,n as m,d as g,H as d}from"./header-B7cyRmcB.js";var u=Object.defineProperty,l=(s,e,t,v)=>{for(var r=void 0,c=s.length-1,n;c>=0;c--)(n=s[c])&&(r=n(e,t,r)||r);return r&&u(e,t,r),r};const i=class i extends h{constructor(){super(...arguments),this.locations=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(this.locations=t)}).catch(t=>console.error("Error fetching data:",t))}render(){return o`
      <div class="location-cards">
        ${this.locations.map(e=>o`
            <div class="location-card">
              <img src="${e.imageURL}" alt="${e.name}" />
              <h2>${e.name}</h2>
              <p>${e.state}</p>
              <p>${e.category}</p>
            </div>
          `)}
      </div>
    `}};i.styles=p`
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
  `;let a=i;l([m()],a.prototype,"src");l([f()],a.prototype,"locations");customElements.define("location-card-element",a);g({"scenicroute-header":d,"location-card-element":a});d.initializeOnce();
