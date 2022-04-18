// selecting HTML elements

const operationDisplay = document.querySelector('#operation-display');
const resultDisplay = document.querySelector('#result-display');
const operands = document.querySelectorAll('#operand');
const operators = document.querySelectorAll('#operator');
const allClear = document.querySelector('#all-clear');
const equal = document.querySelector('#equal');

// variable declaration

let displayNumber1 = '';
let displayNumber2 = '';
let result = null;
let lastOperation = '';

// clear function and changing values between current and previous operand

const clear = (name = '') => {
  displayNumber1 += displayNumber2 + name;
  operationDisplay.innerText = displayNumber1;
  resultDisplay.innerText = '';
  displayNumber2 = '';
};

// math operation function

const mathOperation = () => {
  if (lastOperation === '*') {
    result = parseFloat(result) * parseFloat(displayNumber2);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(displayNumber2);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(displayNumber2);
  } else if (lastOperation === '÷') {
    result = parseFloat(result) / parseFloat(displayNumber2);
  }
};

// all clear event listener

allClear.addEventListener('click', (event) => {
  resultDisplay.innerText = '0';
  operationDisplay.innerText = '0';
  displayNumber1 = '';
  displayNumber2 = '';
  result = '';
});

// looping over operands and adding event listeners to it.

operands.forEach((operand) =>
  operand.addEventListener('click', (event) => {
    displayNumber2 += event.target.innerText;
    resultDisplay.innerText = displayNumber2;
  })
);

// looping over operators and adding event listener to it.

operators.forEach((operator) =>
  operator.addEventListener('click', (event) => {
    if (!displayNumber2) result;
    const operation = event.target.innerText;
    if (displayNumber1 && displayNumber2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(displayNumber2);
    }
    clear(operation);
    lastOperation = operation;
  })
);

// adding event listener to equal button

equal.addEventListener('click', (event) => {
  if (!displayNumber1 || !displayNumber2) return;
  mathOperation();
  clear();
  resultDisplay.innerText = result;
  displayNumber2 = result;
  displayNumber1 = '';
});
