/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

const displayElement = document.querySelector(".display"); // Display element
let secondInput = ""; // value of current input
let firstInput = ""; // value of previous input
let operator = ""; // operator chosen

// Add click event listener to the calculator
document.getElementById("calculator").addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("number")) {
    appendNumber(target.textContent); // to input numbers
  } else if (target.classList.contains("operator")) {
    inputOperator(target.textContent); // to input operators
  } else if (target.classList.contains("equals")) {
    calculate(); // to perform the calculation
  }
});

// Append a number to the second input
function appendNumber(number) {
  secondInput += number;
  updateDisplay(secondInput);
}

// to update display with current value
function updateDisplay(value) {
  displayElement.textContent = value;
}

// to clear any inputs
function clearCalculator() {
  secondInput = "";
  firstInput = "";
  operator = "";
  updateDisplay("");
}

// to input operators
function inputOperator(op) {
  if (op === "C") {
    clearCalculator();
    return;
  }

  if (secondInput === "") return;

  if (firstInput !== "" && operator !== "") {
    calculate(); // to perform existing calculation if applicable
  }

  operator = op;
  firstInput = secondInput;
  secondInput = "";
}

// calculation of code block
function calculate() {
  if (secondInput === "" || firstInput === "" || operator === "") return;

  const num1 = firstInput;
  const num2 = secondInput;
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  updateDisplay(result);
  firstInput = result.toString();
  secondInput = "";
  operator = "";
}
