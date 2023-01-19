// Add functionality
const items = document.getElementById("items");
const toDoInput = document.getElementById("toDoInput");
let toDos = [];

const addToDo = (e) => {
  e.preventDefault();
  if (toDoInput.value) {
    toDos.push(toDoInput.value);
    let curIndex = toDos.length - 1;
    let createDiv = document.createElement("div");
    createDiv.classList.add("row");
    createDiv.innerHTML = `<div class="col"><input type="checkbox" id="cbitem${curIndex}">
  <input type="text" id="item${curIndex}" value="${toDos.at(curIndex)}"></div>`;
    itemForm.appendChild(createDiv);
    toDoInputForm.reset();
  } else {
    alert("Don't try adding empty ToDos, you lazy bastard!");
  }
};
addToDoBtn.addEventListener("click", addToDo);
