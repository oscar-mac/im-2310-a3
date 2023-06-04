// Power On/Off

var isCalculatorOn = false;

function turnOn() {
  isCalculatorOn = true;
  var buttons = document.getElementsByClassName('btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  displayHello();
}

function displayHello() {
  var display = document.getElementById('display');
  display.value = 'HELLO'; // Calculator says "HELLO" to foster a relationship the user has with the product and creates a playful user interaction.
  disableButtons(); // Disable buttons during the "HELLO" display
  setTimeout(function () {
    clearDisplay();
    enableButtons(); // Enable buttons after the "HELLO" display is cleared
  }, 2000);
}

function disableButtons() {
  var buttons = document.getElementsByClassName('btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

function enableButtons() {
  var buttons = document.getElementsByClassName('btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

function clearDisplay() {
  var display = document.getElementById('display');
  display.value = '';
}

function turnOff() {
  isCalculatorOn = false;
  var buttons = document.getElementsByClassName('btn');
  disableButtons();
  clearDisplay();
}

// Calculator

function appendToDisplay(value) {
  if (isCalculatorOn) {
    var display = document.getElementById('display');
    display.value += value;
  }
}

function clearDisplay() {
  var display = document.getElementById('display');
  display.value = ''; // Clears display to ''
}

function calculate() {
  if (isCalculatorOn) {
    var display = document.getElementById('display');
    var result = new Function('return ' + display.value)(); // Creates return function and immediately calls it
    display.value = result;
  }
}

// Key click (Feedback)

const audio = new Audio() // Plays audio when function is called (button onclick)
audio.src = "media/425187__mabdurrahman__calculatorclick.wav";

// Info UI overlay

function showOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block"; // Sets display to block
}

function hideOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none"; // Sets display to none (hide)
}

// debugging

// function log() {
//   console.log('Clicked');
// };







// KEYBOARD INPUT SUPPORT (TO DO)

// INPUT ERROR FEEDBACK (TO DO)

// GOODBYE ON POWER OFF (TO DO)

// DISABLE BUTTON FEEDBACK ON POWER OFF

// ADVANCED MATH USING .btn-disabled