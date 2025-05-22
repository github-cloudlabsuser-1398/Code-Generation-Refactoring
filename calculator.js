function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by zero.";
    }
    return x / y;
}

// Example usage:
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operation = prompt("Choose operation: add, subtract, multiply, divide");

let result;
switch (operation) {
    case "add":
        result = add(num1, num2);
        break;
    case "subtract":
        result = subtract(num1, num2);
        break;
    case "multiply":
        result = multiply(num1, num2);
        break;
    case "divide":
        result = divide(num1, num2);
        break;
    default:
        result = "Invalid operation";
}
alert("Result: " + result);