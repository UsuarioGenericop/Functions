function example(a, b, c) {
  return a + b + c;
}
console.log(example(1, 2, 3));

example = function (a, b, c) {
  return a + b - c;
}; //Expression Function
console.log(example(1, 2, 3));

let suma = function (a, b) {
  return a + b;
};
console.log(suma(1, 2));
suma = (a, b) => {
  return a - b;
}; //Arrow Function
console.log(suma(1, 2));

const ele = document.getElementById("ele1");

function pintar() {
  ele.style.backgroundColor = "yellow";
}

ele.addEventListener("click", pintar);

function pintar(event) {
  event.target.style.backgroundColor = "yellow";
}

ele.addEventListener("click", pintar); //Improved Version

function pintar(color = "green") {
  ele.style.backgroundColor = color;
}
pintar();
ele.addEventListener("click", function () {
  pintar("yellow");
}); //Function with argument

const boxes = document.getElementsByClassName("div"); //Returns HTML collection
console.log(boxes);
function negro(box) {
  box.style.backgroundColor = "black";
}
for (let box of boxes) {
  //Creates variable box in each iteration of the loop and loops to apply the function to each box
  box.addEventListener("click", function () {
    negro(box); //Runs the function negro on click
  });
} //Function on multiple HTML elements with the same class name

const container = document.getElementById("change");
var a = "green";
var s = "orange";
var d = "skyblue";
var keystroke = undefined; // Each key modifies the value of the global function keystroke
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    keystroke = "pink";
    container.style.backgroundColor = a; // Value "a" can be replaced with keystroke
  } else if (event.key === "s") {
    keystroke = "orange";
    container.style.backgroundColor = s; // Value "s" can be replaced with keystroke
  } else if (event.key === "d") {
    keystroke = "skyblue";
    container.style.backgroundColor = d; // Value "d" can be replaced with keystroke
  } else if (event.key === "q") {
    let myDiv = document.createElement("div"); //Creates new element but only in storage
    myDiv.style.backgroundColor = "purple";
    myDiv.style.width = "200px";
    myDiv.style.height = "200px";
    myDiv.style.border = "solid 1px";
    myDiv.style.borderColor = "black"; // Defines its properties
    document.body.appendChild(myDiv); // Allows it to be displayed
    keystroke = "new div1";
  } else if (event.key === "w") {
    let myDiv = document.createElement("div");
    myDiv.style.backgroundColor = "grey";
    myDiv.style.width = "200px";
    myDiv.style.height = "200px";
    myDiv.style.border = "solid 1px";
    myDiv.style.borderColor = "black";
    document.body.appendChild(myDiv);
    keystroke = "new div2";
  } else if (event.key === "e") {
    let myDiv = document.createElement("div");
    myDiv.style.backgroundColor = "brown";
    myDiv.style.width = "200px";
    myDiv.style.height = "200px";
    myDiv.style.border = "solid 1px";
    myDiv.style.borderColor = "black";
    // The line  container.appendChild(myDiv) creates the new element as a child of the variable container specified on line 54
    document.body.appendChild(myDiv); // Whereas this line creates the new element as a child of the body
    keystroke = "new div3"; // Repeat three times with diferent keys
  } // Function that creates an element
  console.log(keystroke);
}); // Function on event
// All tied to a single addEventListener
