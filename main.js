"use strict";

const number = document.querySelector(".js-input-number");
const btn = document.querySelector(".js-btn");
const hint = document.querySelector(".js-hint");
const triesBtn = document.querySelector(".js-try");
const resetBtn = document.querySelector(".reset-btn");

function getUserClicks() {
  userClicks = userClicks + 1;
  if (number.value === "") {
    triesBtn.value = `¡Vamos a jugar!`;
  } else {
    triesBtn.value = `Número de intentos: ${userClicks}`;
  }
}

function getUserNumber() {
  const userNumber = number.value;

  if (userNumber > 100) {
    hint.innerHTML = `El número debe estar entre 1 y 100.`;
  } else if (userNumber === "") {
    hint.innerHTML = `¡Prueba a escribir un número de 1 a 100!`;
  } else if (userNumber < randomNumber) {
    hint.innerHTML = `¡Número demasiado bajo!`;
  } else if (userNumber > randomNumber) {
    hint.innerHTML = `¡Número demasiado alto!`;
  } else if (userNumber == randomNumber) {
    hint.innerHTML = `¡Felicidades!`;
  }
}

function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let userClicks = 0;

function handleButton(event) {
  event.preventDefault();

  getUserNumber();
  getUserClicks();
}

function handleEnter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
  getUserNumber();
}
/*
function handleReset() {
  if (number.value === "") {
    hint.innerHTML = `¡Prueba a escribir un número de 1 a 100!`;
  }
}
*/
btn.addEventListener("click", handleButton);
number.addEventListener("keyup", handleEnter);
//resetBtn.addEventListener("click", handleReset);
