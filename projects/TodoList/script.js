const addBtn = document.querySelector("#addBtn");
let deleteBtns = document.querySelectorAll(".delete_btn");
const newTodo = document.querySelector("#newTodo");
const listParent = document.querySelector(".list_parent");
const todoList = document.querySelectorAll("li");

addBtn.onclick = (event) => {
  const newTodoNode = document.createElement("li");
  newTodoNode.innerHTML =
    "<p>" + newTodo.value + "</p><button class='delete_btn'>Delete</button>";
  listParent.appendChild(newTodoNode);
  deleteBtns = document.querySelectorAll(".delete_btn");
};
