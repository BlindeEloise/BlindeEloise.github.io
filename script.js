let name = prompt('Как тебя зовут?');

alert(`Привет, ${name}!`);

// sum

function sum() {
    let a = prompt('Напишите первое слагаемое');
    let b = prompt('Напишите второе слагаемое');
    let result = Number(a) + Number(b);
    alert(`Сумма равна ${result}`);
}

// take away 

function takeAway() {
    let a = prompt('Напишите уменьшаемое');
    let b = prompt('Напишите вычитаемое');
    let result = Number(a) - Number(b);
    alert(`Разность равна ${result}`);
}

// multiply

function multiply() {
    let a = prompt('Напишите первый множитель');
    let b = prompt('Напишите второй множитель');
    let result = Number(a) * Number(b);
    alert(`Произведение равно ${result}`);
}

// divide

function divide() {
    let a = prompt('Напишите делимое');
    let b = prompt('Напишите делитель');
    let result = Number(a) / Number(b);
    alert(`Частное равно ${result}`);
}
