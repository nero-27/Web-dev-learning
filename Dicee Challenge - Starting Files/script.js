var randomNumber1 = Math.floor(Math.random() * (7-1)+1);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random() * (7-1)+1);
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

var winner;
if (randomNumber1 > randomNumber2) {
    winner = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    winner = "Player 2 wins";
}
else {
    winner = "It's a tie";
}

document.querySelector("h1").textContent = winner;