class Header extends HTMLElement {
  connectedCallback() {
    const template = `
      <style>
        header {
          padding: 20px;
          text-align: center;
        }
      </style>
      <header>
        ${this.dataset.title}
      </header>
    `
    this.attachShadow({ mode: 'open' }).innerHTML = template
  }
}

customElements.define('vot-header', Header)
