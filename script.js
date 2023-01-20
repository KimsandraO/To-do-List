toDoInputForm.reset();

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
  <input type="text" id="inputItem${curIndex}" class="inputItem" value="${toDos.at(
      curIndex
    )}">`;
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", (e) => {
      itemList.removeChild(liEle);
      delete toDos[curIndex];
      console.log(toDos);
    });
    const editHidden = document.createElement("input");
    editHidden.setAttribute("type", "hidden");
    liEle.appendChild(delBtn);
    liEle.appendChild(editHidden);
    itemList.appendChild(liEle);
    const inputItem = document.getElementsByClassName("inputItem")[curIndex];
    inputItem.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        toDos[curIndex] = inputItem.value;
        console.log("edit works!" + curIndex);
      }
    });
    toDoInputForm.reset();
    console.log(toDos);
  } else {
    alert("Don't try adding empty ToDos, you lazy bastard!");
  }
};
addToDoBtn.addEventListener("click", addToDo);
