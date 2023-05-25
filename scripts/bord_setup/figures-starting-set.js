import { FIGURES } from "./constants.js";

export const initBoard = () => {
    const emptyLine = {
        "1": FIGURES.NONE, "2": FIGURES.NONE, "3": FIGURES.NONE, "4": FIGURES.NONE,
        "5": FIGURES.NONE, "6": FIGURES.NONE, "7": FIGURES.NONE, "8": FIGURES.NONE 
    }
    let board = {
        "A": {...emptyLine}, "B": {...emptyLine}, "C": {...emptyLine}, "D": {...emptyLine}, 
        "E": {...emptyLine}, "F": {...emptyLine}, "G": {...emptyLine}, "H": {...emptyLine}
    }

    board["A"]["1"] = FIGURES.W_ROOK;
    board["B"]["1"] = FIGURES.W_KNIGHT;
    board["C"]["1"] = FIGURES.W_BISHOP;
    board["D"]["1"] = FIGURES.W_QUEEN;
    board["E"]["1"] = FIGURES.W_KING;
    board["F"]["1"] = FIGURES.W_BISHOP;
    board["G"]["1"] = FIGURES.W_KNIGHT;
    board["H"]["1"] = FIGURES.W_ROOK;
    board["A"]["2"] = FIGURES.W_PAWN;
    board["B"]["2"] = FIGURES.W_PAWN;
    board["C"]["2"] = FIGURES.W_PAWN;
    board["D"]["2"] = FIGURES.W_PAWN;
    board["E"]["2"] = FIGURES.W_PAWN;
    board["F"]["2"] = FIGURES.W_PAWN;
    board["G"]["2"] = FIGURES.W_PAWN;
    board["H"]["2"] = FIGURES.W_PAWN;
    board["A"]["8"] = FIGURES.B_ROOK;
    board["B"]["8"] = FIGURES.B_KNIGHT;
    board["C"]["8"] = FIGURES.B_BISHOP;
    board["D"]["8"] = FIGURES.B_QUEEN;
    board["E"]["8"] = FIGURES.B_KING;
    board["F"]["8"] = FIGURES.B_BISHOP;
    board["G"]["8"] = FIGURES.B_KNIGHT;
    board["H"]["8"] = FIGURES.B_ROOK;
    board["A"]["7"] = FIGURES.B_PAWN;
    board["B"]["7"] = FIGURES.B_PAWN;
    board["C"]["7"] = FIGURES.B_PAWN;
    board["D"]["7"] = FIGURES.B_PAWN;
    board["E"]["7"] = FIGURES.B_PAWN;
    board["F"]["7"] = FIGURES.B_PAWN;
    board["G"]["7"] = FIGURES.B_PAWN;
    board["H"]["7"] = FIGURES.B_PAWN;

    const keys = Object.keys(board);
    
    keys.forEach((key, index) => {
        const keysOfBoardValues = Object.keys(board[key]);
        keysOfBoardValues.forEach((keyOfColumn, index) => {
            let cell = document.getElementById(`${key}${keyOfColumn}`);

            if(!!board[key][keyOfColumn].PATH) {
                let img = document.createElement('img');
                img.src = board[key][keyOfColumn].PATH;
                cell.appendChild(img);
            }
        }); 
    });
};
