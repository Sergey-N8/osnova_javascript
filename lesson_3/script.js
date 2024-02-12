// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const exponentiation = function (num) {
    if (num >= 0) {
        return num ** 3;
    } else {
        throw new Error('Введено неверное число');
    }
}

console.log(exponentiation(prompt(`Введите число`)));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const taxProcent = function (namber) {
    if (typeof namber === 'number' && !isNaN(namber) && namber >= 0) {
        return namber * 0.87;
    } else if (namber <= 0) {
        throw new Error('Число меньше/равно нулю');
    } else {
        throw new Error('Введен текст, а не число');
    }
}
console.log(taxProcent(Number(prompt(`Введите число`))));

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const maxNamber = function (namber1, namber2, namber3) {
    if (typeof namber1 === 'number' && !isNaN(namber1) && typeof namber2 === 'number' && !isNaN(namber2) && typeof namber3 === 'number' && !isNaN(namber3)) {
        return Math.max(namber1, namber2, namber3);
    } else {
        throw new Error('Введен текст, а не число');
    }
}

console.log(maxNamber(Number(prompt(`Введите первое число`)), Number(prompt(`Введите второе число`)), Number(prompt(`Введите второе число`))));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let summ = function (namberOne, namberTwo) {
    let sum = namberOne + namberTwo;
    return console.log(sum);
}

summ(12, 222);

let deduction = function (namberOne, namberTwo) {
    if (namberOne > namberTwo) {
        let deduction = namberOne - namberTwo;
        return console.log(deduction);
    } else if (namberOne < namberTwo) {
        let deduction = namberTwo - namberOne;
        return console.log(deduction);
    } else {
        return console.log(0);
    }
}

deduction(12, 222);

let multiplication = function (namberOne, namberTwo) {
    let multiplication = namberOne * namberTwo;
    return console.log(multiplication);
}

multiplication(12, 222);

let division = function (namberOne, namberTwo) {
    let division = namberOne / namberTwo;
    return console.log(division);
}

division(12, 222);