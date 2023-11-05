const container = document.querySelector(".container");
const showDialog = document.querySelector("#addBookBtn");
const bookDialog = document.querySelector("#bookDialog");
const outputBox = document.querySelector("output");
const input = document.querySelector("input");
const inputs = document.querySelectorAll("input");
const radioChecked = document.querySelector("input[type='radio']:checked");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const dialog = document.querySelector("dialog");

const myLibrary = [
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    pages: 256,
    status: "finished",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
    status: "finished",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    pages: 256,
    status: "not read",
  },
  {
    title:
      "Apprenticeship Patterns: Guidance for the Aspiring Software Craftsman",
    author: "Dave Hoover. Adewale Oshineye",
    pages: 129,
    status: "finished",
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  let book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function displayBooks() {
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
      <div>
        <p>${myLibrary[i].title}</p>
        <p>by: ${myLibrary[i].author}</p>
        <p>${myLibrary[i].pages} pages</p>
        <p>status: ${myLibrary[i].status}</p>
      </div>
      <div>
        <button class="read" data-read="${i}">Mark as ${
      myLibrary[i].status === "not read" ? "Read" : "Unread"
    }</button>
        <button class="remove" data-remove ="${i}">Remove</button>
      </div>
    </div>`;
    container.appendChild(div);
  }
}

displayBooks();

showDialog.addEventListener("click", () => {
  dialog.showModal();
});

input.addEventListener("change", (e) => {
  confirmBtn.value = input.value;
});

function validateForm() {
  for (let input of inputs) {
    if (
      !input.checkValidity() === true &&
      !radioChecked.checkValidity() === true
    ) {
      return;
    }
  }
}

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let status = document.querySelector("input[type='radio']:checked").value;
  addBookToLibrary(title, author, pages, status);
  displayBooks();
  bookDialog.close();
});

cancelBtn.addEventListener("click", (e) => {
  bookDialog.close();
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.remove) {
    let index = e.target.dataset.remove;
    myLibrary.splice(index, 1);
    displayBooks();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.read) {
    let index = e.target.dataset.read;
    if (myLibrary[index].status === "not read") {
      myLibrary[index].status = "finished";
    } else if (myLibrary[index].status === "finished") {
      myLibrary[index].status = "not read";
    }
    displayBooks();
  }
});
