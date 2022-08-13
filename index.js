import App from "./components/todomvc-app.js";
import List from "./components/todomvc-list.js";
import Footer from "./components/todomvc-footer.js";

window.customElements.define("todomvc-app", App);
window.customElements.define("todomvc-list", List);
window.customElements.define("todomvc-footer", Footer);
