const addToDoBtn = document.getElementById("add-todo-btn");
const items = document.getElementById("items");
const toDoInput=    document.getElementById("toDoInput");
let nextItem = items.children.length;

const addToDo = (event) => {
  nextItem= nextItem+1;
  let newDiv = document.createElement("div");
  newDiv.classList.add("row");
  newDiv.innerHTML =
  `<div class="col">
        <input type="checkbox" id="item${nextItem}">
        <label for="item${nextItem}">
        <div class="row">
        ${toDoInput.value}
        </div>
        </label>
        </div>`;
  items.appendChild(newDiv);
  event.preventDefault();
};

addToDoBtn.addEventListener("click", addToDo);
