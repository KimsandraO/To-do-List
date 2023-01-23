toDoInputForm.reset(); // Reset input form when loading DOM
let toDos = [];

// Add functionality
// const items = document.getElementById("items");
const toDoInput = document.getElementById("toDoInput");

// Read from local storage and fill array with toDos[]
const storedItems = localStorage.getItem("toDos");
if (storedItems) {
  toDos = JSON.parse(storedItems);
  for (i = 0; i < toDos.length; i++) {
    if (toDos[i]) {
      createToDoItems(i);
    }
  }
}

// Function that creates ToDos
function createToDoItems(curIndex) {
  if (!curIndex) {
    const curIndex = toDos.length - 1;
  }
  const liEle = document.createElement("li"); // Create li element
  liEle.id = `liItem${curIndex}`; // Add an id with $curIndex to li element
  liEle.innerHTML = `<input type="checkbox" id="cbItem${curIndex}">
  <input type="text" id="inputItem${curIndex}" class="inputItem" value="${toDos.at(
    curIndex
  )}">`; // Fill innerHTML of li element with checkbox and content (input field)

  // Delete item event listener on click of Delete button
  const delBtn = document.createElement("button"); //Create delete button
  delBtn.textContent = "X"; //
  delBtn.addEventListener("click", (e) => {
    itemList.removeChild(liEle); // Remove li ToDo item from DOM
    delete toDos[curIndex]; // Delete from toDos[] array at index $curIndex
    storeLocal(); // Delete from local storage
  });

  //
  liEle.appendChild(delBtn);
  itemList.appendChild(liEle);

  // Edit item event listener on blur (focus lost) of input field
  const inputItem = document.getElementById("inputItem" + curIndex);
  inputItem.addEventListener("blur", (e) => {
    toDos[curIndex] = inputItem.value; // Change toDos[] array at index $curIndex with edit
    storeLocal(); // Save to local storage after edit
  });
}

// Function that saves to local storage
function storeLocal() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

const addToDo = (e) => {
  e.preventDefault();
  if (toDoInput.value) {
    toDos.push(toDoInput.value); // Push value from input field to toDos[] array
    createToDoItems(toDos.length - 1);
    storeLocal(); // Save to local storage after add
    toDoInputForm.reset(); // Reset input form
  } else {
    alert("Don't try adding empty ToDos, you lazy bastard!"); // Alert when ToDo input field is empty
  }
};
addToDoBtn.addEventListener("click", addToDo);
