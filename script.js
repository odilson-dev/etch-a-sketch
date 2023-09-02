const CONTAINER_WIDTH = 800;

let container = document.querySelector(".container");
container.style.width = `${CONTAINER_WIDTH}px`;
container.style.display = "grid";


let button = document.querySelector("button");

button.addEventListener("click", () =>{
    let useAnswer = parseInt(prompt("What is the number of squares per side for the new grid?"));

    if(useAnswer > 100){
        alert("Warning! The maximum number of squares allowed is 100.");
    } else{
    container.innerHTML = '';
    let squareWidth = CONTAINER_WIDTH / useAnswer;


    container.style.gridTemplateColumns = `repeat(${useAnswer}, 1fr)`;
    for(let i = 1; i <= (useAnswer**2); i++){
        const squareItem = document.createElement("div");
        squareItem.style.width = `${squareWidth}px`;
        squareItem.style.height = `${squareWidth}px`;
        squareItem.classList.add("square-item");
        squareItem.addEventListener("mouseover", (e) => {
            if(e.buttons == 1 || e.buttons == 3){
                squareItem.style.backgroundColor = "yellow";
            }
            
        })
        container.appendChild(squareItem);
        
    }

 
}
});

container.style.gridTemplateColumns = `repeat(5, 1fr)`;
for(let i = 1; i <= 25; i++){
    const squareItem = document.createElement("div");
    squareItem.style.width = `${squareWidth}px`
    squareItem.style.height = `${squareWidth}px`
    squareItem.classList.add("square-item");
    squareItem.addEventListener("mouseover", (e) => {
        if(e.buttons == 1 || e.buttons == 3){
            squareItem.style.backgroundColor = "yellow";
        }
        
    })
    
    container.appendChild(squareItem);
}
