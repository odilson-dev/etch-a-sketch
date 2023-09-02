let container = document.querySelector(".container");



for(let i = 1; i <= 256; i++){
    const squareItem = document.createElement("div");
    squareItem.classList.add("square-item");
    squareItem.textContent = i;
    container.appendChild(squareItem);
}
