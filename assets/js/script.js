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
