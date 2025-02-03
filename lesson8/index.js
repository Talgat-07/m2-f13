const lang = document.getElementById("lang");
const html = document.documentElement;
const form = document.getElementById("form");
const list = document.getElementById("list");

const savedTheme = localStorage.getItem("to-do-theme");
html.setAttribute("data-theme", savedTheme);

class Theme {
  constructor() {
    this.newTheme = "";
  }

  changeTheme() {
    this.newTheme =
      html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", this.newTheme);
    localStorage.setItem("to-do-theme", this.newTheme);
  }
}

const theme = new Theme();

lang.addEventListener("click", () => theme.changeTheme());

class ToDo {
  constructor() {}
  addTask(input) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.textContent = "edit";
    const task = input.value;
    span.textContent = task;
    li.addEventListener("click", () => this.removeTask(li));
    btn.addEventListener("click", () => this.editTask(input, li, task));
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  }

  removeTask(li) {
    li.remove();
  }

  editTask(input, li, task) {
    li.remove();
    input.value = task;
  }
}

const toDo = new ToDo();

form.addEventListener("submit", (el) => {
  el.preventDefault();
  const input = el.target[0];
  toDo.addTask(input);
  input.value = "";
});

// null === "dark" ? "light" : "dark";

// if (null === "dark") {
//   ("light");
// } else {
//   ("dark");
// }
