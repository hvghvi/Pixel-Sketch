const container = document.querySelector(".container");


for (let i = 0; i< 256; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}


const boxes= document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("mouseover", () => {
    boxes[i].style.backgroundColor = "lightblue";
  });

  boxes[i].addEventListener("mouseout", () => {
    boxes[i].style.backgroundColor = "blue";
  });
}


const user = document.getElementById("user");

user.addEventListener("click", (event) => numberofbox());

function numberofbox(event) {
    let boxes = Number(window.prompt("number of squares per side?"));

    while (container.firstChild != null) {
      container.removeChild(container.firstChild);
    }
}
