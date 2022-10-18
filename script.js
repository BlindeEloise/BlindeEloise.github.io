// sum

function sum() {
    let numberOneInput = document.getElementById('numberOneSum').value;
    let numberTwoInput = document.getElementById('numberTwoSum').value;
    let result = Number(numberOneInput) + Number(numberTwoInput);
    resultSum.value = result;
}

// take away 

function takeAway() {
    let numberOneInput = document.getElementById('numberOneMinus').value;
    let numberTwoInput = document.getElementById('numberTwoMinus').value;
    let result = Number(numberOneInput) - Number(numberTwoInput);
    resultMinus.value = result;
}

// multiply

function multiply() {
    let numberOneInput = document.getElementById('numberOneMultiply').value;
    let numberTwoInput = document.getElementById('numberTwoMultiply').value;
    let result = Number(numberOneInput) * Number(numberTwoInput);
    resultMultiply.value = result;
}

// divide

function divide() {
    let numberOneInput = document.getElementById('numberOneDivide').value;
    let numberTwoInput = document.getElementById('numberTwoDivide').value;
    let result = Number(numberOneInput) / Number(numberTwoInput);
    resultDivide.value = result;
}
