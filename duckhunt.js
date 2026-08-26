let ducks;
let duckCount = 1;

let duckImageNames = ["./assets/duck-left.gif", "./assets/duck-right.gif"]
let duckImageWidth = 96;
let duckImageHeight = 93;
let duckFlapSound = new Audio("./assets/duck-flap.mp3");
let duckaddSound = new Audio("./assets/duck-quack.mp3");


let gameWidth = window.screen.width;
let gameHeight = window.screen.height * 3 / 4;

let duckVelocityX = 5;
let duckVelocityY = 5;

let score = 0;

window.onload = function () {
    setTimeout(addDucks, 2500);
    setInterval(moveDucks, 1000 / 60);
}

function addDucks() {
    ducks = [];
    
    duckCount = Math.floor(Math.random() * 5) + 1; // Random number of ducks between 1 and 5
    for (let i = 0; i < duckCount; i++) {
        let duckImageName = duckImageNames[Math.floor(Math.random() * 2)];

        //image
        let duckImage = document.createElement("img");
        duckImage.src = duckImageName;
        duckImage.width = duckImageWidth;
        duckImage.height = duckImageHeight;
        duckImage.draggable = false;
        duckImage.style.position = "absolute";
        duckImage.onclick = function () {

            let duckShotSound = new Audio("./assets/duck-shot.mp3")
            duckShotSound.play();

            score += 1;
            document.getElementById("score").innerHTML = "Score: " + score;

            document.body.removeChild(this);
            let remainingDucks = [];
            for (let j = 0; j < ducks.length; j++) {
                if (ducks[j].image != this) {
                    remainingDucks.push(ducks[j]);
                }
            }
            ducks = remainingDucks;
            if (ducks.length === 0) {
                addDog();
            }
        }
        document.body.appendChild(duckImage);
        duckaddSound.play();


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
            //duckFlapSound.play();
            duck.velocityX = -duckVelocityX;
        } else {
           // duckFlapSound.play();
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

        // Move horizontally
        duck.x += duck.velocityX;

        // Bounce left/right
        if (duck.x < 0 || duck.x + duckImageWidth > gameWidth) {
            duck.velocityX *= -1;

            if (duck.velocityX < 0) {
                // Moving left
                duckFlapSound.play();
                duck.image.src = duckImageNames[0];

            } else {
                // Moving right
                duckFlapSound.play();
                duck.image.src = duckImageNames[1];
            }
        }

        // Move vertically
        duck.y += duck.velocityY;

        // Bounce up/down
        if (duck.y < 0 || duck.y + duckImageHeight > gameHeight) {
            duck.velocityY *= -1;
        }

        // Update position
        duck.image.style.left = String(duck.x) + "px";
        duck.image.style.top = String(duck.y) + "px";
    }
}

function addDog() {
    let dogImage = document.createElement("img");

    if (duckCount == 1) {
        dogImage.src = "./assets/dog-duck1.png";
        dogImage.width = 172;
    } else {
        dogImage.src = "./assets/dog-duck2.png";
        dogImage.width = 224;
    }

    dogImage.height = 152;
    dogImage.draggable = false;

    dogImage.style.position = "absolute";
    dogImage.style.bottom = "0px";
    dogImage.style.left = "50%";
    dogImage.style.transform = "translateX(-50%)";

    document.body.appendChild(dogImage);

    let dogScoreSound = new Audio("./assets/dog-score.mp3")
    dogScoreSound.play();
    setTimeout(function () {
        document.body.removeChild(dogImage);
        addDucks();
    }, 5000)
}