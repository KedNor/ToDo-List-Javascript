// import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

console.log(form, input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entre = input.value;
  input.value = "";
  addTodo(entre);
  displayTodo();
});

const todo = [
  {
    text: "Je suis une todo",
    done: false,
  },

  {
    text: "faire du JS",
    done: true,
  },
];

const displayTodo = () => {
  const todosNode = todo.map((todo, index) => {
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"> </span>
    <p>${todo.text}</p>
    <button>Supprimer</button>`;
  return li;
};

const addTodo = (text) => {
  todo.push({
    text,
    done: false,
  });
};

displayTodo();
