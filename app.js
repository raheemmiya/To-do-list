const placeholder = document.getElementById("placeholder");
const button = document.querySelector("button");
const listContainer = document.querySelector(".list-container");
const listItemsContainer = document.querySelector(".listItemsContainer");

button.addEventListener("click", () => {
  // alert("aff")
  if (placeholder.value === "") {
    alert("Please, Enter something");
  } else {
    addTask(placeholder.value);
  }
});

function addTask(value) {
  let newTask = document.createElement("span");
  newTask.innerHTML = `<li>${value}</li><img src= "delete-icon.png"><img>`;
  listItemsContainer.appendChild(newTask);
  placeholder.value = "";
}

listItemsContainer.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "img") {
    event.target.parentElement.remove();
  }
});
