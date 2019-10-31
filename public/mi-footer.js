customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.textContent = "Copyright © 2019 Posadas Diaz Manuel Josafeth.";
  }
}, { extends: "footer" });