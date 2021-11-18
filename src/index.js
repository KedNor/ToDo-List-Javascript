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
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  buttonDelete.addEventListener("click", (event) => {
    deleteTodo(index);
  });

  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"> </span>
    <p>${todo.text}</p>`;
  li.appendChild(buttonDelete);
  return li;
};

const addTodo = (text) => {
  todo.push({
    text,
    done: false,
  });
  displayTodo;
};

const deleteTodo = (index) => {
  todo.splice(index, 1);
  displayTodo();
};
displayTodo();
