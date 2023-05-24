export const figures_addresses = {
    "whiteRook": "./images/rook-w.svg",
    "whiteKnight": "./images/archbis-w.svg",
    "whiteBishop": "./images/bishop-w.svg",
    "whiteQueen": "./images/queen-white.svg",
    "whiteKing": "./images/king-w.svg",
    "whitePawn": "./images/pawn-w.svg",
    "blackRook": "./images/rook-b.svg",
    "blackKnight": "/images/archbis-b.svg",
    "blackBishop": "/images/bishop-b.svg",
    "blackQueen": "/images/queen-black.svg",
    "blackKing": "/images/king-b.svg",
    "blackPawn": "/images/pawn-b.svg",
};

export const insertStartingPositionsOfBlackFigures = (figuresAddressesArray, items) => {
    let positionsArray = [
        "A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8", 
        "A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7",
        "A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2",
        "A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"
    ];

    console.log(positionsArray.slice(8, 16).find(() => ("B7")));
    console.log(positionsArray.slice(8, 16));
    let img = document.createElement('img');
    for (let item_index = 0; item_index < items.length; item_index++){
        if (items[item_index].id == positionsArray[0] || items[item_index].id == positionsArray[7]){
            img = document.createElement('img');
            img.src = figuresAddressesArray["blackRook"];
            img.alt = "black rook";
            items[item_index].appendChild(img);
        } else if (items[item_index].id == positionsArray[1] || items[item_index].id == positionsArray[6]){
            img = document.createElement('img');
            img.src = figuresAddressesArray["blackKnight"];
            img.alt = "black knight";
            items[item_index].appendChild(img);
        } else if (items[item_index].id == positionsArray[2] || items[item_index].id == positionsArray[5]){
            img = document.createElement('img');
            img.src = figuresAddressesArray["blackBishop"];
            img.alt = "black bishop";
            items[item_index].appendChild(img);
        } else if (items[item_index].id == positionsArray[3]){
            img = document.createElement('img');
            img.src = figuresAddressesArray["blackQueen"];
            img.alt = "black queen";
            items[item_index].appendChild(img);
        } else if (items[item_index].id == positionsArray[4]){
            img = document.createElement('img');
            img.src = figuresAddressesArray["blackKing"];
            img.alt = "black king";
            items[item_index].appendChild(img);
        } 
        else if (positionsArray.slice(8, 16).find((element) => items[item_index].id)){
            console.log("shemovida");
            
            img = document.createElement('img');
            img.src = figuresAddressesArray["blackPawn"];
            img.alt = "black pawn";
            items[item_index].appendChild(img);
        };  
        
    };
};


