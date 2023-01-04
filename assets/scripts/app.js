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

function writeToLog(
    operationIdentifier, 
    preResult, 
    operationNumber, 
    newResult) {
        const logEntry = {
            operator: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry.operator);
        console.log(logEntries[0]);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    //currentResult = currentResult + enteredNumber;
    currentResult += enteredNumber;
    // currentResult++;
    createWriteLog('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    // currentResult = currentResult - enteredNumber;
    currentResult -= enteredNumber;
    // currentResult--;
    createWriteLog('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    // currentResult = currentResult * enteredNumber;
    currentResult *= enteredNumber;
    createWriteLog('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}


function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    // currentResult = currentResult / enteredNumber;
    currentResult /= enteredNumber;
    createWriteLog('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



