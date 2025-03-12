var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber1);

var player1Img = document.querySelector(".img1");

player1Img.setAttribute("src", `./images/dice${randomNumber1}.png`);

// //////////

var player2Img = document.querySelector(".img2");
player2Img.setAttribute("src", `./images/dice${randomNumber2}.png`);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "⛳️ Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins ⛳️";
} else {
  heading.textContent = "Draw! 😂";
}
