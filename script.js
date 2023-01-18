const items = document.getElementById("items");

const addToDo = (event) => {
  let createDiv = document.createElement("div");
  createDiv.classList.add("row");
  createDiv.innerHTML =
    '<div class="col"><input type="checkbox"><label for="item1"> ' +
    document.getElementById("toDoInput").value +
    "</label></div>";
  items.appendChild(createDiv);
  event.preventDefault();
};

addToDoBtn.addEventListener("click", addToDo);
