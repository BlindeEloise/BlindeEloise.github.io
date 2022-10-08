let name = prompt('Как тебя зовут?');

alert(`Привет, ${name}!`);

// sum

function sum() {
    let a = prompt('Напишите первое число');
    let b = prompt('Напишите второе число');
    let result = Number(a) + Number(b);
    alert(`Получилось ${result}`);
}

// take away 

function takeAway() {
    let a = prompt('Из чего вычитаем?');
    let b = prompt('Сколько вычитаем?');
    let result = Number(a) - Number(b);
    alert(`Получилось ${result}`);
}

// multiply

function multiply() {
    let a = prompt('Что умножаем?');
    let b = prompt('На какое число умножаем?');
    let result = Number(a) * Number(b);
    alert(`Получилось ${result}`);
}

// divide

function divide() {
    let a = prompt('Что нужно разделить?');
    let b = prompt('На какое число делить?');
    let result = Number(a) / Number(b);
    alert(`Получилось ${result}`);
}
