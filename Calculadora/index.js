const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

//https://dev.to/kebean10/calculator-learn-how-to-build-a-modern-calculator-using-javascript-4dme
