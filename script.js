toDoInputForm.reset(); // Reset input form when loading DOM
let toDos = []; // Create empty toDos[] array
const toDoInput = document.getElementById("toDoInput"); // Input field for new ToDos

// Read from local storage and fill array with toDos[]
const storedItems = localStorage.getItem("toDos");
if (storedItems) {
  // If there are any stored items in local storage
  toDos = JSON.parse(storedItems); // Then convert string from local storage back to array
  for (i = 0; i < toDos.length; i++) {
    // And loop through that array
    if (toDos[i]) {
      // If the array at index i is not empty/null
      createToDoItems(i); // Then call createToDoItems function with i as the argument
    }
  }
}

// Function that creates ToDos
function createToDoItems(curIndex) {
  // Creates the list elements whenever called
  if (!curIndex) {
    // If current Index is not null
    const curIndex = toDos.length - 1; // Then use length of toDos[] array - 1
  }
  const liEle = document.createElement("li"); // Create li element
  liEle.id = `liItem${curIndex}`; // Add an id with $curIndex to li element
  liEle.innerHTML = `<input type="checkbox" id="cbItem${curIndex}">
  <input type="text" id="inputItem${curIndex}" class="inputItem" value="${toDos.at(
    curIndex
  )}">`; // Fill innerHTML of li element with checkbox and content (input field)

  // Delete item event listener on click of Delete button
  const delBtn = document.createElement("button"); //Create delete button
  delBtn.textContent = "X"; // Text for delete button
  delBtn.addEventListener("click", (e) => {
    // Event listener for delete button click
    itemList.removeChild(liEle); // Remove li ToDo item from DOM
    delete toDos[curIndex]; // Delete from toDos[] array at index $curIndex
    storeLocal(); // Delete from local storage
  });

  // Actually append the elements earlier
  liEle.appendChild(delBtn); // Append the delete button to the li element
  itemList.appendChild(liEle); // Append the li element to the ul

  // Edit item event listener on blur (focus lost) of input field
  const inputItem = document.getElementById("inputItem" + curIndex); // Get the input item to edit
  inputItem.addEventListener("blur", (e) => {
    // And add an event listener to it for blur event
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
    createToDoItems(toDos.length - 1); // Create ToDo item at the end of list
    storeLocal(); // Save to local storage after add
    toDoInputForm.reset(); // Reset input form
  } else {
    alert("Don't try adding empty ToDos, you lazy bastard!"); // Alert when ToDo input field is empty
  }
};

addToDoBtn.addEventListener("click", addToDo); // Event listener for Add button (+) click
