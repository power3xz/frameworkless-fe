import getTodos from "./getTodos.js";
import todosView from "./todos.js";
import counterView from "./counter.js";
import filtersView from "./filters.js";
import registry from "./registry.js";

registry.add("todos", todosView);
registry.add("filters", filtersView);
registry.add("counter", counterView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

window.requestAnimationFrame(() => {
  const main = document.querySelector(".todoapp");
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});
