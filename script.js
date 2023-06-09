let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", () => {
  let form = document.querySelector("#new-book-form");
  form.style.display = "block";
});
