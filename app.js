
let resetButton = document.querySelector(".reset");
let blueButton = document.querySelector(".blue");
let randomButton = document.querySelector(".random");
let colorChoice = [];
let Blue = ["blue"];
var randomColor = Math.floor(Math.random()*16777215).toString(16);
let sizeButton = document.querySelector(".sizeButton");


function createBoard(){
  let boardSize = document.getElementById("sizeInput").value
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll("div");
  board.style.gridTemplateRows = `repeat(${boardSize} , 1fr)`;
  board.style.gridTemplateColumns = `repeat(${boardSize} , 1fr)`;
  
for(let i = 0;i < boardSize*boardSize; i++){
  let square = document.createElement("div");
  square.addEventListener("click",color);
  square.style.backgroundColor = "green";
  square.className = "grid";
  blueButton.addEventListener("click",chooseBlue);
  randomButton.addEventListener("click",chooseRandom);
  board.insertAdjacentElement("beforeend",square);
  resetButton.addEventListener("click", reset);
  function reset(){
    square.style.backgroundColor = "green"
  };
  let boardSize = document.getElementById("sizeInput").value
  sizeButton.addEventListener("click",reset);
  sizeButton.addEventListener("click",createBoard);
  
      
  }};


createBoard();


function color(){
  if (colorChoice == randomColor){
  this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;;
  }
  else{
    this.style.backgroundColor = "blue";
  }
};

function chooseBlue(){
  colorChoice.pop();
  colorChoice.push("blue");
}

function chooseRandom(){
  colorChoice.pop();
  colorChoice.push(randomColor);
}



