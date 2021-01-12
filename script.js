/* Math.Random generates numbers between 0 - 0.99. 
I want it to generate numbers between 1 and 3 
so we multiply by 3 and add 1 round the resulting number with "floor"
*/
var randomNumber1 = Math.floor(Math.random() *3) + 1; 

var randomIcon1 = "images/RPS" + randomNumber1 +".png"; // combine random numbers with image sources

var icon1 = document.querySelectorAll("img")[0]; //choose the 0th index among all img tags

icon1.setAttribute("src", randomIcon1); // Change source

// Same things for icon2 
var randomNumber2 = Math.floor(Math.random() *3) + 1;
var randomIcon2 = "images/RPS" + randomNumber2 +".png"; 
var icon2 = document.querySelectorAll("img")[1];
icon2.setAttribute("src", randomIcon2);

// Match conditions
if(randomNumber1 == 1 && randomNumber2 == 3){
    document.querySelector("h1").innerHTML = "Player 1 Win!";
}
else if (randomNumber1 == 1 && randomNumber2 == 2 ){
    document.querySelector("h1").innerHTML = "Player 2 Win!";
}
else if (randomNumber1 == 2 && randomNumber2 == 1){
    document.querySelector("h1").innerHTML = "Player 1 Win!";
}
else if (randomNumber1 == 2 && randomNumber2 == 3 ){
    document.querySelector("h1").innerHTML = "Player 2 Win!";
}
else if (randomNumber1 == 3 && randomNumber2 == 1){
    document.querySelector("h1").innerHTML = "Player 2 Win!";
}
else if (randomNumber1 == 3 && randomNumber2 == 2){
    document.querySelector("h1").innerHTML = "Player 1 Win!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}