/* eslint-disable */
import "bootstrap";
import "./style.css";

let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let icono = [
  "<h2>&#9824</h2>",
  "<h2>&#9827</h2>",
  "<h2>&#9829</h2>",
  "<h2>&#9830</h2>"
];

let num = function() {
  let salida = Math.floor(Math.random() * numero.lenght);
  return salida;
};
let num2 = function() {
  let salida = Math.floor(Math.random() * 3);
  return salida;
};

window.onload = function() {
  console.log("Se supone que esto debería aparecer en consola");
  console.log("esto también debería aparecer en consola " + numero[2]);
};

document.getElementById("number").innerHTML = "<h1>2</h1>";
document.getElementById("icon").innerHTML = icono[num2];
document.getElementById("icon2").innerHTML = icono[num2];

// 	<h2>&#9824; "&#9827;"  	"&#9829;" "&#9830;""
