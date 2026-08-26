let ducks = [];
let duckCount = 1;

let duckImageNames = [
    "./assets/duck-left.gif",
    "./assets/duck-right.gif"
];

let duckImageWidth = 96;
let duckImageHeight = 93;

let gameWidth = window.innerWidth;
let gameHeight = window.innerHeight * 3 / 4;

let duckVelocityX = 5;
let duckVelocityY = 5;

let score = 0;


// Start game
window.onload = function () {
    setTimeout(addDucks, 2500);
    setInterval(moveDucks, 1000 / 60);
};


// Add ducks
function addDucks() {

    ducks = [];

    // Random number between 1 and 5
    duckCount = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < duckCount; i++) {

        // Randomly choose left or right image
        let duckImageName =
            duckImageNames[Math.floor(Math.random() * duckImageNames.length)];


        // Create duck image
        let duckImage = document.createElement("img");

        duckImage.src = duckImageName;
        duckImage.width = duckImageWidth;
        duckImage.height = duckImageHeight;
        duckImage.draggable = false;

        duckImage.style.position = "absolute";


        // Duck clicked
        duckImage.onclick = function () {

            // Play shot sound
            let duckShotSound =
                new Audio("./assets/duck-shot.mp3");

            duckShotSound.play();


            // Increase score
            score += 1;

            document.getElementById("score").innerHTML =
                "Score: " + score;


            // Remove clicked duck
            document.body.removeChild(this);


            // Remove duck from ducks array
            let remainingDucks = [];

            for (let j = 0; j < ducks.length; j++) {

                if (ducks[j].image != this) {
                    remainingDucks.push(ducks[j]);
                }
            }

            ducks = remainingDucks;


            // If all ducks are shot
            if (ducks.length === 0) {
                addDog();
            }
        };


        // Add duck to page
        document.body.appendChild(duckImage);


        // Duck quack sound
        let duckAddSound =
            new Audio("./assets/duck-quack.mp3");

        duckAddSound.play();


        // Create duck object
        let duck = {

            image: duckImage,

            x: randomPosition(
                gameWidth - duckImageWidth
            ),

            y: randomPosition(
                gameHeight - duckImageHeight
            ),

            velocityX: duckVelocityX,

            velocityY: duckVelocityY
        };


        // Set starting position
        duck.image.style.left =
            String(duck.x) + "px";

        duck.image.style.top =
            String(duck.y) + "px";


        // Set starting direction
        if (duck.image.src.includes("left")) {

            duck.velocityX = -duckVelocityX;

        } else {

            duck.velocityX = duckVelocityX;
        }


        // Add duck to array
        ducks.push(duck);
    }
}


// Generate random position
function randomPosition(limit) {

    return Math.floor(Math.random() * limit);
}


// Move ducks
function moveDucks() {

    for (let i = 0; i < ducks.length; i++) {

        let duck = ducks[i];


        // =========================
        // Move horizontally
        // =========================

        duck.x += duck.velocityX;


        // Bounce left/right
        if (
            duck.x < 0 ||
            duck.x + duckImageWidth > gameWidth
        ) {

            // Reverse horizontal velocity
            duck.velocityX *= -1;


            // Play flap sound
            let duckFlapSound =
                new Audio("./assets/duck-flap.mp3");

            duckFlapSound.play();


            // Change duck image
            if (duck.velocityX < 0) {

                // Moving left
                duck.image.src =
                    duckImageNames[0];

            } else {

                // Moving right
                duck.image.src =
                    duckImageNames[1];
            }
        }


        // =========================
        // Move vertically
        // =========================

        duck.y += duck.velocityY;


        // Bounce up/down
        if (
            duck.y < 0 ||
            duck.y + duckImageHeight > gameHeight
        ) {

            duck.velocityY *= -1;
        }


        // =========================
        // Update position
        // =========================

        duck.image.style.left =
            String(duck.x) + "px";

        duck.image.style.top =
            String(duck.y) + "px";
    }
}


// Add dog
function addDog() {

    let dogImage =
        document.createElement("img");


    // Choose dog image based on duck count
    if (duckCount == 1) {

        dogImage.src =
            "./assets/dog-duck1.png";

        dogImage.width = 172;

    } else {

        dogImage.src =
            "./assets/dog-duck2.png";

        dogImage.width = 224;
    }


    dogImage.height = 152;
    dogImage.draggable = false;


    // Dog position
    dogImage.style.position =
        "absolute";

    dogImage.style.bottom =
        "0px";

    dogImage.style.left =
        "50%";

    dogImage.style.transform =
        "translateX(-50%)";


    // Add dog to page
    document.body.appendChild(dogImage);


    // Dog score sound
    let dogScoreSound =
        new Audio("./assets/dog-score.mp3");

    dogScoreSound.play();


    // Remove dog after 5 seconds
    setTimeout(function () {

        if (document.body.contains(dogImage)) {

            document.body.removeChild(dogImage);
        }

        // Start next round
        addDucks();

    }, 5000);
}