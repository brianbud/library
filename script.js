const container = document.querySelector(".container");
const addBookBtn = document.querySelector("#dialog");
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

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
