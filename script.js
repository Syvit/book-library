function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pageCount = pages;
  // this.read = read;
}

const bookDisplay = document.querySelector("#library");
const inputForm = document.querySelector(".input-form");
const addBookButton = document.querySelector("#new-book");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const submitButton = document.querySelector("#submit-button");

let myLibrary = [
  {
    title: "test",
    author: "test",
    pages: 123,
    // read: false,
  },
];

function addBook() {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  storeItems();
}

const storeItems = () => {
  localStorage.setItem("Library", JSON.stringify(myLibrary));
};

const getItems = () => {
  myLibrary = JSON.parse(localStorage.getItem("Library"));
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBook();
  getItems();
  location.reload();
});

function displayLibrary() {
  getItems();
  bookDisplay.innerHTML = JSON.stringify(myLibrary);
}

displayLibrary();

console.table(myLibrary);
console.log(localStorage);
