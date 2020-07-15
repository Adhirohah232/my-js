var randomNumber1= Math.random();
randomNumber1=randomNumber1*6 + 1;
randomNumber1= Math.floor(randomNumber1);

var randomimage = "dice" + randomNumber1 + ".png";
var randomimagesource = "images/" + randomimage;
var player1 = document.querySelectorAll('img')[0];
player1.setAttribute('src',randomimagesource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomimge1 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll('img')[1].setAttribute('src', randomimge1);

if(randomNumber1>randomNumber2){
  document.querySelectorAll('h1')[0].innerHTML = "player1 wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelectorAll('h1')[0].innerHTML = "player2 wins";
}
else if(randomNumber1===randomNumber2){
   document.querySelectorAll('h1')[0].innerHTML = 'Draw';
}
