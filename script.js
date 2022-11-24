const container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
}

makeGrid(16, 16);
addHover();

function deleteGrid() {
    document.querySelectorAll('.grid-item').forEach(e => e.remove());
}

function addHover() {
    const squares = document.getElementsByClassName("grid-item");

    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomRGB();
        })
    }

}

const button = document.querySelector("button");

button.addEventListener('click', () => {

    let input = prompt("How large should the grid be?", "2");

    if (parseInt(input) > 32) {
        input = "32";
    }
    deleteGrid();
    makeGrid(parseInt(input), parseInt(input));
    addHover();
})

function randomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string

    return rgb;
}









