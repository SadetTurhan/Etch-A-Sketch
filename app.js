let board = document.querySelector(".board");
let squares = document.querySelectorAll("div");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

function createBoard(){
for(let i = 0;i < 256; i++){
  let square = document.createElement("div");
  square.addEventListener("mouseover",color);
  square.style.backgroundColor = "green";
  square.className = "grid";
  board.insertAdjacentElement("beforeend",square);
  let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);

  function reset(){
    square.style.backgroundColor = "green"
  };
}};

createBoard();

function color(){
  this.style.backgroundColor = "black";
};


