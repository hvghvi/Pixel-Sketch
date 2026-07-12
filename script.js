const container = document.querySelector(".container");

function createGrid(sidelength=16) {
  for (let i = 0; i< sidelength*sidelength; i++){
      const box = document.createElement("div");
      box.classList.add("box");
      container.appendChild(box);
      box.style.width = (100 / sidelength) + "%";
      box.style.height = (100 / sidelength) + "%";

  }
  const boxes= document.getElementsByClassName("box");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
      boxes[i].style.backgroundColor = "white";
    });

    boxes[i].addEventListener("click", () => {
      boxes[i].style.backgroundColor = "white";
    });
  }
}


const user = document.getElementById("user");

user.addEventListener("click", (event) => numberofbox());

function numberofbox(event) {
    let newBoxes = Number(window.prompt("number of squares per side?"));

    while (container.firstChild != null) {
        container.removeChild(container.firstChild);
      }

    createGrid(newBoxes);
}

const clear = document.getElementById("clear");
clear.addEventListener("click", () =>resetColors());


    
function resetColors() {
  const boxes = document.getElementsByClassName("box");

  for (let i = 0; i < boxes.length; i++) {
     boxes[i].style.backgroundColor = "black";
  }
}

createGrid();