document.querySelector(".img1").setAttribute("src","images/dice6.png");
document.querySelector(".img2").setAttribute("src","images/dice6.png");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


let s1 = "images/dice" + randomNumber1 + ".png";
let s2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",s1);
document.querySelector(".img2").setAttribute("src",s2);

let res = "";
if(randomNumber1 > randomNumber2){
    res = "Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    res = "Player2 Wins!";
}
else{
    res = "Draw!";
}
document.querySelector("h1").innerText = res;