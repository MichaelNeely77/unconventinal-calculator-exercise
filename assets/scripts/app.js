const defaultResultValue = 0;

let currentResult = defaultResultValue;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(5,6);





let calculationDescription = `(${defaultResultValue} + 10) * 3 /2 -1`;


outputResult(currentResult, calculationDescription);