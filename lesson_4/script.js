// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

let stop = 11;

for (let i = 0; i < stop; i++) {
    console.log(i);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 1);
arr.splice(3, 1);
console.log(arr); 


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let minBOrder = 0;

let maxBorder = 9;

let numMin = maxBorder + 1;

let size = 5;

let numSum = 0;

let numMinIndex = 0;

let numCheck = 3;

let сheck = false;

const arrRandom = []

for (let i = 0; i < size; i++) {
    arrRandom.push(Math.floor(Math.random() * (maxBorder - minBOrder + 1)) + minBOrder);

    numSum = numSum + arrRandom[i];

    if (arrRandom[i] < numMin) {
        numMin = arrRandom[i];
        numMinIndex = i;
    }

    if (arrRandom[i] === numCheck) {
        сheck = true;
    }

}

console.log(arrRandom);

console.log(`Сумма все элементов ${numSum}`);

console.log(`Минимальное число ${numMin}`);

if (сheck === true) {
    console.log(`В этом массиве есть ${numCheck}`);
} else {
    console.log(`В этом массиве нет ${numCheck}`);
}

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let rowsCount = 20;

let resultConsole = 'x';

for (let i = 0; i < rowsCount; i++) {
    console.log(resultConsole);
    resultConsole = resultConsole + 'x'
}