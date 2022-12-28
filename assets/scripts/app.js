const defaultResultValue = 0;

let currentResult = defaultResultValue;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is ' + result) ;
}

add(5,6);
add(3,4);


currentResult = (currentResult + 10) * 3/2 -1;

let calculationDescription = `(${defaultResultValue} + 10) * 3 /2 -1`;


outputResult(currentResult, calculationDescription);