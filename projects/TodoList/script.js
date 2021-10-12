const addBtn = document.querySelector('#addBtn');
const newTodo = document.querySelector('#newTodo');
const listParent = document.querySelector('.list_parent');
const todoList = document.querySelectorAll('li')

addBtn.onclick = (event) => {
    const newTodoNode = document.createElement("li");
    const newPNode = document.createElement('p');
    const newDeleteNode = document.createElement('button', {class:"delete_tn"});

    const newTodoText = document.createTextNode(newTodo.value);
    const newDeleteText = document.createTextNode("Delete");

    newPNode.appendChild(newTodoText)
    newDeleteNode.appendChild(newDeleteText)

    newTodoNode.appendChild(newPNode)
    newTodoNode.appendChild(newDeleteNode)
    listParent.appendChild(newTodoNode)
}

