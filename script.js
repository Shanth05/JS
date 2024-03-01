

/* Author: S.Pirashanth
Date : 26.0.2024
Title : Java Script Bootcamp
 
console.log("Welcome to Java Script"); //This is demo code
window.alert("Hello Student");

// Variables

let x=10;
let y=10.23;
let z="shanth";
let v=true;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof v);

//Arithmetic

*/

let username;
document.getElementById("submit").onclick=
function () {
    username = document.getElementById("txt").value;
    console.log(username);

    document.getElementById("name").textContent= `${username}`;
}
