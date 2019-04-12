// My Solution

var image1 = document.querySelector("div .img1");

var image2 = document.querySelector("div .img2");

var result = document.querySelector("div h1");

var player1 = Math.random();
player1 = Math.floor(player1 * 6)+1;
console.log(player1);

var player2 = Math.random();
player2 = Math.floor(player2 * 6)+1;
console.log(player2);


function playPlayer1() {


if (player1 === 1) {
return image1.setAttribute("src", "images/dice1.png");
}

else if (player1 === 2) {
  return image1.setAttribute("src", "images/dice2.png");
}

else if (player1 === 3) {
  return image1.setAttribute("src", "images/dice3.png");
}

else if (player1 === 4) {
  return image1.setAttribute("src", "images/dice4.png");
}

else if (player1 === 5) {
  return image1.setAttribute("src", "images/dice5.png");
}

else if (player1 === 6) {
  return image1.setAttribute("src", "images/dice6.png");
}
}

function playPlayer2() {


if (player2 === 1) {
  return image2.setAttribute("src", "images/dice1.png");
}

else if (player2 === 2) {
  return image2.setAttribute("src", "images/dice2.png");
}

else if (player2 === 3) {
  return image2.setAttribute("src", "images/dice3.png");
}

else if (player2 === 4) {
  return image2.setAttribute("src", "images/dice4.png");
}

else if (player2 === 5) {
  return image2.setAttribute("src", "images/dice5.png");
}

else if (player2 === 6) {
  return image2.setAttribute("src", "images/dice6.png");
}


}

function playTheGame() {
playPlayer1();
playPlayer2();


if (player1 > player2) {
result.innerHTML = "🚩Player 1 wins!";
}

else if (player1 < player2) {
result.innerHTML = "Player 2 wins!🚩";
}

else if (player1 === player2) {
result.innerHTML = "Draw";
}

}



playTheGame();




// Angela's Solution

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//
// var randomDiceImage = "dice" + randomNumber1 + ".png";
//
// var randomImageSource = "images/" + randomDiceImage;
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
// 
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomDiceImage = "dice" + randomNumber2 + ".png";
//
// var randomImageSource = "images/" + randomDiceImage;
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
//
//
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
// }
// else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
// }
//
// else
//   document.querySelector("h1").innerHTML = "Draw!";
