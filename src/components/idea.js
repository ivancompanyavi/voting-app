const template = `
<style>
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
  }
  .title {
    flex: 1;
    background-color: red;
  }
  .votes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.2;
    
  }
</style>
<ul>
  <li>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="votes">
      <slot name="votes">0</slot>
    </div>
  </li>
</ul>
`

class Idea extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' }).innerHTML = template
  }
}

customElements.define('vot-idea', Idea)
