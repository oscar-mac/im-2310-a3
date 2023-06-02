var isCalculatorOn = false;

function turnOn() {
  isCalculatorOn = true;
  var buttons = document.getElementsByClassName('btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

function turnOff() {
  isCalculatorOn = false;
  var buttons = document.getElementsByClassName('btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  clearDisplay();
}

function appendToDisplay(value) {
  if (isCalculatorOn) {
    var display = document.getElementById('display');
    display.value += value;
  }
}

function clearDisplay() {
  var display = document.getElementById('display');
  display.value = '';
}

function calculate() {
  if (isCalculatorOn) {
    var display = document.getElementById('display');
    var result = eval(display.value);
    display.value = result;
  }
}

const audio = new Audio()
audio.src = "media/425187__mabdurrahman__calculatorclick.wav";