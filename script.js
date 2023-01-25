toDoInputForm.reset(); // Reset input form when loading DOM
const toDoInput = document.getElementById("toDoInput"); // Get input field for new ToDos

// Read from local storage and fill array with toDos[]
let toDos = JSON.parse(localStorage.getItem("toDos")) || []; // Fill toDos[] array with values from local storage or create an empty toDos[] array
if (toDos) {
  // If there are any stored items in local storage
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
  delBtn.className = "delBtn";
  delBtn.innerHTML = '<i class="bi bi-x"></i>'; // Text (x) for delete button
  delBtn.addEventListener("click", (e) => {
    // Event listener for delete button click
    itemList.removeChild(liEle); // Remove li ToDo item from DOM
    delete toDos[curIndex]; // Delete from toDos[] array at index $curIndex
    storeLocal(); // Delete from local storage
  });

  // Actually append the elements created earlier
  liEle.appendChild(delBtn); // Append the delete button to the li element
  itemList.insertBefore(liEle, toDoInputLi);
  // itemList.insertBefore(liEle, toDoInputLi); // Append the li element to the ul

  // Edit item event listener on blur (focus lost) of input field
  const inputItem = document.getElementById("inputItem" + curIndex); // Get the input item to edit
  inputItem.addEventListener("blur", (e) => {
    // And add an event listener to it for blur event
    if (inputItem.value != "") {
      // If value of input field is NOT empty
      toDos[curIndex] = inputItem.value; // Change toDos[] array at index $curIndex with edit
    } else {
      delete toDos[curIndex]; // Else (when empty) delete from toDos[] array at index $curIndex
      // itemList.removeChild(liEle); // Uncomment this to immediately delete the input field on blur event as well
    }
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
  }
};

toDoInput.addEventListener("blur", addToDo); // Event listener for Add button (+) click
toDoInputForm.addEventListener("submit", addToDo); // Event listener for Add button (+) click
