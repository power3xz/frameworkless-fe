export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.template = document.getElementById("todo-footer");
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      const content = this.template.content.firstElementChild.cloneNode(true);
      this.appendChild(content);
    });
  }
}
