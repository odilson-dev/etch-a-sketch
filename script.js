let container = document.querySelector(".container");
container.style.display = "grid";

let button = document.querySelector("button");

button.addEventListener("click", () =>{
    let useAnswer = parseInt(prompt("What is the number of squares per side for the new grid?"));

    container.style.gridTemplateColumns = `repeat(${useAnswer}, 1fr)`;
    for(let i = 1; i <= (useAnswer**2); i++){
        const squareItem = document.createElement("div");
        squareItem.classList.add("square-item");
        squareItem.textContent = i;
        container.appendChild(squareItem);
    }
});

container.style.gridTemplateColumns = `repeat(16, 1fr)`;
for(let i = 1; i <= 256; i++){
    const squareItem = document.createElement("div");
    squareItem.classList.add("square-item");
    squareItem.textContent = i;
    container.appendChild(squareItem);
}
