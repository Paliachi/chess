import { initBoard } from "./figures-starting-set.js";

const root = document.getElementById('root');

function setColor() {
    let changeColor = false;
    function colorHandler (arg) {
        if (arg) {
            changeColor = false;
        } else {
            changeColor = true;
        };
    };
    for (let i = 0; i < 64; i++) {
        let divElement = document.createElement("div");
        divElement.classList.add("grid-item");
        root.appendChild(divElement);

        if (i % 8 == 0 && i !== 0) {
            colorHandler(changeColor);
        };
        if (changeColor) {
            if (i % 2 == 0) {
                divElement.classList.add("black-item");
            } else {
                divElement.classList.add("white-item");
            };
        } else {
            if (i % 2 == 0) {
                divElement.classList.add("white-item");
            } else {
                divElement.classList.add("black-item");
            };
        };
    };
};

function setCoordinates () {
    let itemArray = Array.from(document.querySelectorAll(".grid-item"));
    const rowArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const columnArray = [8, 7, 6, 5, 4, 3, 2, 1];
    let loopNumberCoordinateCounter = 0;
    let columnIndex = 0;
    for (const i in itemArray) {
        loopNumberCoordinateCounter += 1;
        if (loopNumberCoordinateCounter > 8){
            loopNumberCoordinateCounter = 1;
            columnIndex += 1;
        };
        itemArray[i].id = rowArray[loopNumberCoordinateCounter - 1] + columnArray[columnIndex];
    };
};

setColor();
setCoordinates();

initBoard();
