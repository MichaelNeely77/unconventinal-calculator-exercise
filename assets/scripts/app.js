const defaultResultValue = 0;

let currentResult = defaultResultValue;

function add() {
    const calcDescription = `${currentResult}` + `${userInput.value}`; 
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);




