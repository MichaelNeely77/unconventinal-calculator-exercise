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
    prevResult, 
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

if(
    calculationType !== 'ADD' &&
    calculationType !== 'ASUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
) {
    return;
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createWriteLog('+', initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}



function add() {
   calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}


function divide() {
    calculateResult('DIVIDE');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


