let board = document.querySelector(".board");
let squares = document.querySelectorAll("div");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";
let resetButton = document.querySelector(".reset");
let blueButton = document.querySelector(".blue");
let blackButton = document.querySelector(".black");

function createBoard(){
for(let i = 0;i < 256; i++){
  let square = document.createElement("div");
  square.addEventListener("click",color);
  square.style.backgroundColor = "green";
  square.className = "grid";
  board.insertAdjacentElement("beforeend",square);
  resetButton.addEventListener("click", reset);

  function reset(){
    square.style.backgroundColor = "green"
  };
}};

createBoard();

function color(){
  this.style.backgroundColor = "black";
};



