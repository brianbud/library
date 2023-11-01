const container = document.querySelector(".container");
const showDialog = document.querySelector("#showDialog");
const bookDialog = document.querySelector("#bookDialog");
const outputBox = document.querySelector("output");
const input = document.querySelector("input");
const confirmBtn = document.querySelector("#confirmBtn");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("dialog button");

const myLibrary = [
  {
    title: "Title Test 1",
    author: "author 1",
  },
  {
    title: "title test 2",
    author: "author 2",
  },
  {
    title: "title test 3",
    author: "author 3",
  },
];

function Book() {
  //the contructor
}

function addBookToLibrary() {}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `<p>${myLibrary[i].title}</p><p>${myLibrary[i].author}</p>`;
    div.classList = "card";
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

bookDialog.addEventListener("close", (e) => {
  outputBox.value =
    bookDialog.returnValue === "default"
      ? "No return value"
      : `Return value ${bookDialog.returnValue}`;
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookDialog.close(input.value);
});
