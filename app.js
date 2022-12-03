let board = document.querySelector(".board");
let squares = document.querySelectorAll("div");
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";
let resetButton = document.querySelector(".reset");
let blueButton = document.querySelector(".blue");
let blackButton = document.querySelector(".black");
let colorChoice = [];
let Blue = ["blue"];
let Black = ["black"];
let sizeButton = document.querySelector(".squarenumber");
let sizeBoard = []

function createBoard(){
for(let i = 0;i < 256; i++){
  let square = document.createElement("div");
  square.addEventListener("click",color);
  square.style.backgroundColor = "green";
  square.className = "grid";
  blueButton.addEventListener("click",chooseBlue);
  blackButton.addEventListener("click",chooseBlack);
  board.insertAdjacentElement("beforeend",square);
  resetButton.addEventListener("click", reset);
  sizeButton.addEventListener("click",getSize);
  function reset(){
    square.style.backgroundColor = "green"
  };
}};

createBoard();

function color(){
  if (colorChoice == "black"){
  this.style.backgroundColor = "black";
  }
  else{
    this.style.backgroundColor = "blue";
  }
};

function chooseBlue(){
  colorChoice.pop();
  colorChoice.push("blue");
}

function chooseBlack(){
  colorChoice.pop();
  colorChoice.push(Black);
}

function getSize(){
  let sizeOfBoard = prompt()
  sizeBoard.pop();
  sizeBoard.push(sizeOfBoard);
}