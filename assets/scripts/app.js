const defaultResultValue = 0;
let currentResult = defaultResultValue;
let logEntries =[]; // starting with empty array because starting with new array. Uniinitialized does the same thing

function getUserInput() {
    return parseInt(userInput.value);
}

function createWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    //currentResult = currentResult + enteredNumber;
    currentResult += enteredNumber;
    // currentResult++;
    createWriteLog('+', initialResult, enteredNumber);
    const logEntry = {
        operator: 'ADD',
        prevResult: initialResult,
        number: currentResult,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries[0]);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    // currentResult = currentResult - enteredNumber;
    currentResult -= enteredNumber;
    // currentResult--;
    createWriteLog('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    // currentResult = currentResult * enteredNumber;
    currentResult *= enteredNumber;
    createWriteLog('*', initialResult, enteredNumber);
}


function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    // currentResult = currentResult / enteredNumber;
    currentResult /= enteredNumber;
    createWriteLog('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



