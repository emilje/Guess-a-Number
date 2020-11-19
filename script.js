'use strict';


console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Start Guessing!";

document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = "";
console.log(document.querySelector(".guess").value);



let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

document.querySelector(".score").textContent = score;

function removePoint() {
    if (score > 1) {
        score--;
        document.querySelector(".score").textContent = score;

    }
    else {
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent = "You lose!";
    }
}

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // when no input
    if (!guess) {
        document.querySelector(".message").textContent = "Insert a valid number.";
    }
    // when guess is correct
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "You guessed correct!";

        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = score;
        }

        /* my way
             if (score > document.querySelector(".highscore").textContent) {
            document.querySelector(".highscore").textContent = score;
        } */


    }
    // when guess is too low
    else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "Too low!";
        removePoint();
    }
    // when guess is too high
    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high!";
        removePoint();
    }
})

document.querySelector(".again").addEventListener("click", function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";

})

