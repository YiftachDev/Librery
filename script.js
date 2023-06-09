let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
}

const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", () => {
  let form = document.querySelector("#new-book-form");
  form.style.display = "block";
});

const form = document.querySelector("#new-book-form");

form.addEventListener("submit", event => {
  event.preventDefault();
  addBookToLibrary();
});
