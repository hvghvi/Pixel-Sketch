const container = document.querySelector(".container");

let currentColour = "#ffffff";
let isErasing = false;
let dragModeOn = false;
let isMouseDown = false;

function createGrid(sidelength = 16) {
  for (let i = 0; i < sidelength * sidelength; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.style.width = (100 / sidelength) + "%";
    box.style.height = (100 / sidelength) + "%";
  }
}

function paintBox(box) {
  box.style.backgroundColor = isErasing ? "black" : currentColour;
}

// event delegation so listeners survive grid resets
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    paintBox(e.target);
  }
});

container.addEventListener("mouseover", (e) => {
  if (dragModeOn && isMouseDown && e.target.classList.contains("box")) {
    paintBox(e.target);
  }
});

document.addEventListener("mousedown", () => { isMouseDown = true; });
document.addEventListener("mouseup", () => { isMouseDown = false; });
container.addEventListener("dragstart", (e) => e.preventDefault());


const user = document.getElementById("user");

user.addEventListener("click", () => numberofbox());

function numberofbox() {
  let newBoxes = Number(window.prompt("number of squares per side? (1-100)"));
  while (newBoxes <= 0 || newBoxes > 100) {
    newBoxes = Number(window.prompt("number of squares per side? (1-100)"));
  }

  while (container.firstChild != null) {
    container.removeChild(container.firstChild);
  }

  createGrid(newBoxes);
}

const clear = document.getElementById("clear");
clear.addEventListener("click", () => resetColours());

function resetColours() {
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "black";
  }
}

// eraser
const eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener("click", () => toggleEraser());

function toggleEraser() {
  isErasing = !isErasing;
  eraserBtn.classList.toggle("active", isErasing);
}

// change colour
const colourBtn = document.getElementById("colour-btn");
const colourPicker = document.getElementById("colour-picker");

colourBtn.addEventListener("click", () => colourPicker.click());

colourPicker.addEventListener("input", (e) => {
  currentColour = e.target.value;
  // picking a colour switches off eraser mode automatically
  if (isErasing) toggleEraser();
});

// drag mode
const dragBtn = document.getElementById("drag");
dragBtn.addEventListener("click", () => toggleDragMode());

function toggleDragMode() {
  dragModeOn = !dragModeOn;
  dragBtn.textContent = "drag: " + (dragModeOn ? "on " : "off");
  dragBtn.classList.toggle("active", dragModeOn);
}

// keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "g") numberofbox();
  if (e.key === "r") resetColours();
  if (e.key === "e") toggleEraser();
  if (e.key === "c") colourPicker.click();
  if (e.key === "d") toggleDragMode();
});

createGrid();