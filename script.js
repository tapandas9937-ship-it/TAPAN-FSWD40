let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

function appendNumber(num) {
    if (!isSecond) {
        firstNumber += num;
        document.getElementById("display").value = firstNumber;
    } else {
        secondNumber += num;
        document.getElementById("display").value = secondNumber;
    }
}

function appendDot() {
    if (!isSecond && !firstNumber.includes(".")) {
        firstNumber += ".";
    } else if (isSecond && !secondNumber.includes(".")) {
        secondNumber += ".";
    }
    updateDisplay();
}

function setOperator(op) {
    if (firstNumber === "") return;
    operator = op;
    isSecond = true;
}

function calculate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result = 0;

    if (operator === "+") result = num1 + num2;
    if (operator === "-") result = num1 - num2;
    if (operator === "*") result = num1 * num2;
    if (operator === "/") {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    }

    document.getElementById("display").value = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecond = false;
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecond = false;
    document.getElementById("display").value = "";
}

function updateDisplay() {
    document.getElementById("display").value = isSecond ? secondNumber : firstNumber;
}