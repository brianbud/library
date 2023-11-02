const container = document.querySelector(".container");
const showDialog = document.querySelector("#showDialog");
const bookDialog = document.querySelector("#bookDialog");
const outputBox = document.querySelector("output");
const input = document.querySelector("input");
const confirmBtn = document.querySelector("#confirmBtn");
const dialog = document.querySelector("dialog");

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

function Book(title) {
  this.title = title;
}

function addBookToLibrary(title) {
  let book = new Book(title);
  myLibrary.push(book);
}

function displayBooks() {
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
      <p>${myLibrary[i].title}</p><p>${myLibrary[i].author}</p>
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
  e.preventDefault();
  let title = document.querySelector("#title").value;
  addBookToLibrary(title);
  displayBooks();
  bookDialog.close(input.value);
});
