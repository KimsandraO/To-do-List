// Add functionality
// const items = document.getElementById("items");
const toDoInput = document.getElementById("toDoInput");
let toDos = [];

const addToDo = (e) => {
  e.preventDefault();
  if (toDoInput.value) {
    toDos.push(toDoInput.value);
    const curIndex = toDos.length - 1;
    const liEle = document.createElement("li");
    liEle.id = `liItem${curIndex}`;
    liEle.innerHTML = `<input type="checkbox" id="cbItem${curIndex}">
  <input type="text" id="inputItem${curIndex}" value="${toDos.at(curIndex)}">`;
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", (e) => {
      itemList.removeChild(liEle);
    });
    liEle.appendChild(delBtn);
    itemList.appendChild(liEle);
    toDoInputForm.reset();
  } else {
    alert("Don't try adding empty ToDos, you lazy bastard!");
  }
};
addToDoBtn.addEventListener("click", addToDo);

// <button id="delBtn${curIndex}">Del</button>
