// Variable
// const
// let
// var <---- 

// getElementByID
const btnClickMe = document.getElementById("btn-click-me");
const txtUserInput = document.getElementById("user-input");
const display = document.getElementById("display");
const selectColor = document.getElementById("select-color");
const paragraphTag = document.querySelectorAll("p");
const linkTag = document.querySelector("a");

linkTag.innerText = "CHanged this";
linkTag.innerHTML = "<b>CHanged this</b>";
// paragraphTag[0].innerText = "test";
// paragraphTag[1].innerText = "test 2";
// display.innerText = paragraphTag.length;
// How to change the value of an element
// btnClickMe.value = "I just changed this value";
// display.innerText = "Thats right";

// Input
// Output
// loops
// Conditions
// Variables
// Operators

// .addEventListner(action, function)
btnClickMe.addEventListener('click', function(event) {
    

});

selectColor.addEventListener('change', function() {
    display.style.backgroundColor = selectColor.value;

});