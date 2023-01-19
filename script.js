// Add functionality
const items = document.getElementById("items");
let toDos = [];

const addToDo = (e) => {
  e.preventDefault();
  toDos.push(document.getElementById("toDoInput").value);
  let curIndex = toDos.length - 1;
  let createDiv = document.createElement("div");
  createDiv.classList.add("row");
  createDiv.innerHTML = `<div class="col"><input type="checkbox" id="cbitem${curIndex}">
  <input type="text" id="item${curIndex}" value="${toDos.at(curIndex)}"></div>`;
  itemForm.appendChild(createDiv);
  toDoInputForm.reset();
};
addToDoBtn.addEventListener("click", addToDo);
