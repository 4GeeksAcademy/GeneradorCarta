/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("button").addEventListener("click", generarCartaNueva);
  //write your code here
  let cardValue = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];
  function generarCartaNueva() {
    let cardPinta = ["♦", "♥", "♠", "♣"];

    function elegirAleatorio(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    const valorAleatorio = elegirAleatorio(cardValue);

    document.querySelector(".value").innerHTML = valorAleatorio;

    const pintaAleatoria = elegirAleatorio(cardPinta);
    document.querySelectorAll(".pinta").forEach(elementoPinta => {
      elementoPinta.innerHTML = pintaAleatoria;

      if (pintaAleatoria == "♥" || pintaAleatoria == "♦") {
        elementoPinta.style.color = "red";
      }
      if (pintaAleatoria == "♠" || pintaAleatoria == "♣") {
        elementoPinta.style.color = "black";
      }
    });
  }
  generarCartaNueva();
};
