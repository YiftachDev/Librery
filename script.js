let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", () => {
  let form = document.querySelector("#new-book-form");
  form.style.display = "block";
});
