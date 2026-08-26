let ducks;
let duckCount = 1;

let duckImageNames = ["./assets/duck-left.gif", "./assets/duck-right.gif"]
let duckImageWidth = 96;
let duckImageHeight = 93;

let gameWidth = window.screen.width;
let gameHeight = window.screen.height * 3 / 4;

let duckVelocityX = 5;
let duckVelocityY = 5;

window.onload = function () {
    addDucks();
    setInterval(moveDucks, 1000 / 60);
}

function addDucks() {
    ducks = [];
    for (let i = 0; i < duckCount; i++) {
        let duckImageName = duckImageNames[Math.floor(Math.random() * 2)];

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
            x: randomPosition(gameWidth - duckImageWidth),
            y: randomPosition(gameHeight - duckImageHeight),
            velocityX: duckVelocityX,
            velocityY: duckVelocityY
        }
        duck.image.style.left = String(duck.x) + "px"; // x position 
        duck.image.style.top = String(duck.y) + "px"; // y position


        if (duck.image.src.includes("left")) {
            duck.velocityX = -duckVelocityX;
        } else {
            duck.velocityX = duckVelocityX;
        }

        ducks.push(duck);
    }
}

function randomPosition(limit) {
    return Math.floor(Math.random() * limit);
}

function moveDucks() {
    for (let i = 0; i < ducks.length; i++) {
        let duck = ducks[i];

        duck.x += duck.velocityX;
        if(duck.x < 0 || duck.x + duckImageWidth > gameWidth ) {
            //duck.velocityX -= duck.velocityX;
            duck.velocityX *= -1;
        }
        duck.y += duck.velocityY;
        if(duck.y < 0 || duck.y + duckImageHeight > gameHeight ) {
            //duck.velocityY -= duck.velocityY;
            duck.velocityY *= -1;
        }

        duck.image.style.left = String(duck.x) + "px"; // x position 
        duck.image.style.top = String(duck.y) + "px"; // y position

    }
}