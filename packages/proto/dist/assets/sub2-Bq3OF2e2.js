import{i as h,x as n,a as p,n as f,r as m,d as g}from"./state-D9QQRvWg.js";import{H as d}from"./header-BQW9jjF4.js";var u=Object.defineProperty,l=(s,e,t,v)=>{for(var r=void 0,c=s.length-1,o;c>=0;c--)(o=s[c])&&(r=o(e,t,r)||r);return r&&u(e,t,r),r};const i=class i extends h{constructor(){super(...arguments),this.locations=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(e){fetch(e).then(t=>t.json()).then(t=>{t&&(console.log("Fetched data:",t),this.locations=t)}).catch(t=>console.error("Error fetching data:",t))}render(){return n`
      <div class="location-cards">
        ${this.locations.map(e=>n`
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
  `;let a=i;l([f()],a.prototype,"src");l([m()],a.prototype,"locations");customElements.define("location-card-element",a);g({"scenicroute-header":d,"location-card-element":a});d.initializeOnce();
