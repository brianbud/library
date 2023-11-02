const container = document.querySelector(".container");
const showDialog = document.querySelector("#showDialog");
const bookDialog = document.querySelector("#bookDialog");
const outputBox = document.querySelector("output");
const input = document.querySelector("input");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const dialog = document.querySelector("dialog");

const myLibrary = [
  {
    title: "Title Test 1",
    author: "author 1",
    pages: 10,
    status: "not read",
  },
  {
    title: "title test 2",
    author: "author 2",
    pages: 11,
    status: "not read",
  },
  {
    title: "title test 3",
    author: "author 3",
    pages: 12,
    status: "not read",
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
      <p>${myLibrary[i].title}</p>
      <p>${myLibrary[i].author}</p>
      <p>${myLibrary[i].pages}</p>
      <p>${myLibrary[i].status}</p>
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

confirmBtn.addEventListener("click", (e) => {
  if (!input.checkValidity()) {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let status = document.querySelector("input[type='radio']:checked").value;
    addBookToLibrary(title, author, pages, status);
    displayBooks();
    bookDialog.close(input.value);
  } else {
    confirmBtn.disabled = true;
    return;
  }
});

cancelBtn.addEventListener("click", (e) => {
  bookDialog.close();
});
