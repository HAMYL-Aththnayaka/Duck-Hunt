# 🦆 Duck Duck Hunt

A simple browser-based duck shooting game built using **HTML, CSS, and JavaScript**.

The player needs to click and shoot the flying ducks to increase their score. Once all ducks in a round are shot, a dog appears before the next round begins.

## 🎮 Features

* 🦆 Randomly spawns **1–5 ducks** each round
* ↔️ Ducks move horizontally and vertically
* 🔄 Ducks change direction when they hit the game boundaries
* 🖼️ Duck image changes depending on the flying direction
* 🔫 Click a duck to shoot it
* 🏆 Score system
* 🔊 Duck quack, flap, shooting, and dog sounds
* 🐕 Dog appears after all ducks are shot
* 🔁 Automatically starts a new round after the dog animation
* 📱 Browser-based and easy to deploy

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **GIF / PNG images**
* **MP3 audio**

## 📂 Project Structure

```text
Duck-Duck-Hunt/
│
├── index.html
├── duckhunt.css
├── duckhunt.js
│
└── assets/
    ├── logo.jpg
    ├── duck-left.gif
    ├── duck-right.gif
    ├── duck-flap.mp3
    ├── duck-quack.mp3
    ├── duck-shot.mp3
    ├── dog-duck1.png
    ├── dog-duck2.png
    └── dog-score.mp3
```

## 🚀 How to Run

### Option 1 — Run Locally

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

2. Open the project folder.

3. Open `index.html` in your web browser.

No backend or database is required.

### Option 2 — VS Code

If you're using Visual Studio Code:

1. Open the project folder.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Start playing. 🦆

## 🎯 How to Play

1. Wait for the ducks to appear.
2. Click on a duck to shoot it.
3. Each successful shot increases your score by **1**.
4. Shoot all ducks in the current round.
5. The dog appears when the round is completed.
6. After a short delay, a new round starts.

## 🧠 Game Logic

The game randomly generates between **1 and 5 ducks** for each round.

Each duck has:

* An X position
* A Y position
* Horizontal velocity
* Vertical velocity
* A corresponding image

The ducks continuously move using JavaScript. When a duck reaches the edge of the game area, its horizontal or vertical velocity is reversed.

The duck image is also changed when its horizontal direction changes:

```javascript
if (duck.velocityX < 0) {
    duck.image.src = duckImageNames[0];
} else {
    duck.image.src = duckImageNames[1];
}
```

When a duck is clicked, it is removed from the page and from the active ducks array.

When there are no remaining ducks, the dog is displayed and the next round starts after a delay.

## 🔊 Sound Effects

The game includes several sound effects:

| Sound            | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| `duck-quack.mp3` | Plays when ducks appear                        |
| `duck-flap.mp3`  | Plays when a duck changes horizontal direction |
| `duck-shot.mp3`  | Plays when a duck is shot                      |
| `dog-score.mp3`  | Plays when the dog appears                     |

## 🌐 Deployment

This project is a static website, so it can be deployed using services such as:

* Vercel
* GitHub Pages
* Netlify

No server-side code is required.

## 📌 Future Improvements

Some possible improvements for future versions:

* Add a countdown timer
* Add different difficulty levels
* Increase duck speed as the score increases
* Add lives
* Add a high-score system
* Add background music
* Add shooting animations
* Add mobile/touch controls
* Add a game-over screen
* Add a start/restart button

## 👨‍💻 Author

**Yasas Aththanayaka**

Built as a JavaScript browser game project.
