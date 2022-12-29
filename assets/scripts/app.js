const defaultResultValue = 0;

let currentResult = defaultResultValue;

function add() {
    currentResult = currentResult + userInput.value; 
    outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

// let calculationDescription = `(${defaultResultValue} + 10) * 3 /2 -1`;


outputResult(currentResult, calculationDescription);