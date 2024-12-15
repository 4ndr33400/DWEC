//Hecho por Edgar y Andrea
let randomNumber = Math.floor(Math.random() * 100) + 1;
let counter = 0;
const maxTries = 5;
let isCorrect = false;

function guessNumber() {
  let inputNumber = parseInt(document.getElementById("inputNumber").value);

  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
    document.getElementById("message").innerHTML = "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  counter++; 

  if (inputNumber === randomNumber) {
    isCorrect = true;
    document.getElementById("message").innerHTML = show_Info();
    document.getElementById("inputNumber").disabled = true; 
    document.getElementById("button").disabled = true; 
  } else {
    document.getElementById("message").innerHTML = show_Info();
    if (counter === maxTries) {
      document.getElementById("inputNumber").disabled = true; 
      document.getElementById("button").disabled = true; 

    }
  }
}

function show_Info() {
  if (isCorrect) {
    return `¡Enhorabuena! Has acertado el número ${randomNumber} en el intento ${counter}.`;
  } else if (counter === maxTries) {
    return `¡Has perdido! El número que tenías que adivinar era el ${randomNumber}.`;
  } else {
    return `¡Has fallado! Te quedan ${maxTries - counter} intentos.`;
  }
}