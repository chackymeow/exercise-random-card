/* eslint-disable */
import "bootstrap";
import "./style.css";

let numero = [
  "<h1>A</h1>",
  "<h1>2</h1>",
  "<h1>3</h1>",
  "<h1>4</h1>",
  "<h1>5</h1>",
  "<h1>6</h1>",
  "<h1>7</h1>",
  "<h1>8</h1>",
  "<h1>9</h1>",
  "<h1>10</h1>",
  "<h1>J</h1>",
  "<h1>Q</h1>",
  "<h1>K</h1>"
];
let icono = [
  "<h2>&#9824</h2>",
  "<h2>&#9827</h2>",
  "<h2>&#9829</h2>",
  "<h2>&#9830</h2>"
];

window.onload = function() {
  console.log("Se supone que esto debería aparecer en consola");
  console.log("esto también debería aparecer en consola " + numero[2]);
};

function recarga() {
  let num = Math.floor(Math.random() * 12);
  let num2 = Math.floor(Math.random() * 4);

  document.getElementById("number").innerHTML = numero[num];
  document.getElementById("icon").innerHTML = icono[num2];
  document.getElementById("icon2").innerHTML = icono[num2];
}

recarga();
