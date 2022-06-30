function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0){
        return NaN;
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

function display(char, append) {
    const display = document.querySelector(".display");
    if (append){
        display.textContent = display.textContent + char.toString();
    } else {
        display.textContent = char.toString();
    }
}

function modifyDisplay() {
    const id = this.id;
    if (id === "clear"){
        num1 = "";
        num2 = "";
        operator = "";
        display("", false);
    } else if (id === "=") {
        if (operator === "" || num1 === "" || num2 === ""){
            return;
        }
        display(Number(operate(operator, parseInt(num1), parseInt(num2))),
            false);
    } else if (!isNaN(id)){
        if (operator === ""){
            num1 += id;
        } else {
            num2 += id;
        }
        display(id, true);
    } else {
        if (operator !== ""){
            num1 = operate(operator, parseInt(num1), parseInt(num2));
            display(num1, false);
            num2 = "";
        }
        operator = this.textContent;
        display(this.textContent, true);
    }
}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(button => button.addEventListener(
    "click", modifyDisplay));

let num1 = "";
let num2 = "";
let operator = "";