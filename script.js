const CONTAINER_WIDTH = 800;

let container = document.querySelector(".container");
container.style.width = `${CONTAINER_WIDTH}px`;
container.style.display = "grid";


let button = document.querySelector("button");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function createSquares(squareNumber){

    let squareWidth = CONTAINER_WIDTH / squareNumber;
    container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`;
    let color = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
    for(let i = 1; i <= (squareNumber**2); i++){
        const squareItem = document.createElement("div");
        squareItem.style.width = `${squareWidth}px`;
        squareItem.style.height = `${squareWidth}px`;
        squareItem.classList.add("square-item");
        

        squareItem.addEventListener("mouseover", (e) => {
            if(e.buttons == 1 || e.buttons == 3){
                squareItem.style.backgroundColor = color;
            }
        })
        squareItem.addEventListener("mouseout", (e) => {
            if(!(e.buttons == 1 || e.buttons == 3)){
                color =`rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
            }
        })
        container.appendChild(squareItem);
    } 
}

button.addEventListener("click", () =>{
    let userAnswer = parseInt(prompt("What is the number of squares per side for the new grid?"));

    if(userAnswer > 100){
        alert("Warning! The maximum number of squares allowed is 100.");
    } else{
    container.innerHTML = '';
    createSquares(userAnswer);
    
}
});

createSquares(16);
