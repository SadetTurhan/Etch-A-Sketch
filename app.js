
let resetButton = document.querySelector(".reset");
let blueButton = document.querySelector(".blue");
let randomButton = document.querySelector(".random");
let hoverButton = document.getElementById("hoverbutton");
let clickButton = document.getElementById("clickbutton");
let colorChoice = [];
let Blue = ["blue"];
var randomColor = Math.floor(Math.random()*16777215).toString(16);
let sizeButton = document.querySelector(".sizeButton");
let modeChoice = [];

function createBoard(){
  let boardSize = document.getElementById("sizeInput").value
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll("div");
  board.style.gridTemplateRows = `repeat(${boardSize} , 1fr)`;
  board.style.gridTemplateColumns = `repeat(${boardSize} , 1fr)`;
  
for(let i = 0;i < boardSize*boardSize; i++){
  let boardSize = document.getElementById("sizeInput").value
  let square = document.createElement("div");
  board.insertAdjacentElement("beforeend",square);
  square.style.backgroundColor = "darkgrey";
  square.className = "grid";
  square.addEventListener("click",color);
  function chooseHover(){
    modeChoice.pop();
    modeChoice.push("hoverMode");
};
  function chooseClick(){
    modeChoice.pop();
    modeChoice.push("clickMode");
  };
  function chooseMode(){
    if (modeChoice == "clickMode"){
      square.removeEventListener("mouseover",color);
      square.addEventListener("click",color);
    }else{
      square.removeEventListener("click",color);
      square.addEventListener("mouseover",color);
    }
  }
  hoverButton.addEventListener("click",chooseMode);
  clickButton.addEventListener("click",chooseMode);
  blueButton.addEventListener("click",chooseBlue);
  randomButton.addEventListener("click",chooseRandom);
  resetButton.addEventListener("click", reset);
  function reset(){
    square.style.backgroundColor = "darkgrey"
  };
  sizeButton.addEventListener("click",reset);
  sizeButton.addEventListener("click",createBoard);
  function color(){
    if (colorChoice == randomColor){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;;
    }
    else{
      this.style.backgroundColor = "darkblue";
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

  
  
 
    hoverButton.addEventListener("click",chooseHover);
    hoverButton.addEventListener("click",reset);
    clickButton.addEventListener("click",chooseClick);
    clickButton.addEventListener("click",reset);
  }};


createBoard();




