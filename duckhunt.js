let ducks;
let duckCount = 1;

let duckImageNames =["./assets/duck-left.gif","./assets/duck-right.gif"]
let duckImageWidth = 96;
let duckImageHeight = 93;

let gameWidth = window.screen.width;
let gameHeight = window.screen.height*3/4;

let duckVelocityX = 5;
let duckVelocityY = 5;

window.onload = function() {
    addDucks();
}

function addDucks() {
    ducks =[];
    for(let i = 0; i< duckCount; i++){
        let duckImageName = duckImageNames[Math.floor(Math.random()*3)];

        //image
        let duckImage = document.createElement("img");
        duckImage.src = duckImageName;
        duckImage.width = duckImageWidth;
        duckImage.height = duckImageHeight;
        duckImage.draggable = false;
        duckImage.style.position = "absolute";
        document.body.appendChild(duckImage);


        let duck = {
            image: duckImage,
            x:randomPosition(gameWidth - duckImageWidth),
            y:randomPosition(gameHeight - duckImageHeight),
            velocityX: duckVelocityX,
            velocityY: duckVelocityY
        }
        duck.image.style.left =String(duck.x) + "px"; // x position 
        duck.image.style.top = String(duck.y) + "px"; // y position


        if(duck.image.src.includes("left")){
            duck.velocityX = -duckVelocityX;
        } else {
            duck.velocityX = duckVelocityX;
        }

        ducks.push(duck);
    }

    function randomPosition(limit){
        return Math.floor(Math.random() * limit);
    }
}