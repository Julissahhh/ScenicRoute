import{i as d,x as m,c as p,a as f,r as c,n as l,d as b,b as v}from"./state-D9QQRvWg.js";var g=Object.defineProperty,i=(h,s,t,o)=>{for(var e=void 0,a=h.length-1,u;a>=0;a--)(u=h[a])&&(e=u(s,t,e)||e);return e&&g(s,t,e),e};const n=class n extends d{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return m`
      <form
        @change=${s=>this.handleChange(s)}
        @submit=${s=>this.handleSubmit(s)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit">
            <slot name="button-label">Login</slot>
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(s){const t=s.target,o=t==null?void 0:t.name,e=t==null?void 0:t.value,a=this.formData;switch(o){case"username":this.formData={...a,username:e};break;case"password":this.formData={...a,password:e};break}}handleSubmit(s){s.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200&&t.status!==201)throw"Login failed";return t.json()}).then(t=>{const{token:o}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:o,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};n.styles=[p.styles,f`
    .error:not(:empty) {
      color: var(--color-error);
      border: 1px solid var(--color-error);
      padding: var(--size-spacing-medium);
    }
  `];let r=n;i([c()],r.prototype,"formData");i([l()],r.prototype,"api");i([l()],r.prototype,"redirect");i([c()],r.prototype,"error");b({"mu-auth":v.Provider,"login-form":r});
