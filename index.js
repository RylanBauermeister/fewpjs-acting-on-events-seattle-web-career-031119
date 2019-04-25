// Your code here

var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    console.log("Left!")
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    console.log("Right!")
    moveDodgerRight();
  }
})

function moveDodgerLeft() {
  let left = getLeft();
  dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  let left = getLeft();
  dodger.style.left = `${1 + left}px`;
}

function getLeft() {
  let leftStr = dodger.style.left.replace("px", "");
  return parseInt(leftStr, 10);
}
