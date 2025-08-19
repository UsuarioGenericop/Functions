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
  //Creates variable box and loop to apply the function to each box
  box.addEventListener("click", function () {
    negro(box); //Runs the function negro on click
  });
}
