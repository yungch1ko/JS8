const text = document.getElementById("text");
const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");

addButton.addEventListener("click", function() {
  text.textContent = "This is a sample text.";
});

deleteButton.addEventListener("click", function() {
  text.textContent = "";
});
