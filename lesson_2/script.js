// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = Number(prompt('Введите num1'));

if (typeof num1 === 'number' && !isNaN(num1)) {
    if (num1 <= 1) {
        console.log('Переменная num1 равна или меньше 1');
    } else {
        console.log('Переменная num1 БОЛЬШЕ 1');
    }
} else {
    console.log('Это не число');
}

let num2 = Number(prompt('Введите num2'));

if (typeof num2 === 'number' && !isNaN(num2)) {
    if (num2 >= 3) {
        console.log('Переменная num2 больше или равна 3');
    } else {
        console.log('Переменная num2 МЕНЬШЕ 3');
    }
} else {
    console.log('Это не число');
}

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
if (test === true) {
    console.log('+++');
} else {
    console.log('---');
}

console.log((test === true) ? '+++' : '---')

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = Number(prompt('Введите day от 1 до 31'));

if (typeof day === 'number' && !isNaN(day)) {
    if (day >= 1 && day <= 10) {
        console.log('day - первая декада');
    } else if (day >= 11 && day <= 20) {
        console.log('day - вторая декада');
    }else if (day >= 21 && day <= 31) {
        console.log('day - третья декада');
    }else {
        console.log('day не входит в промежуток от 1 до 31');
    }
} else {
    console.log('Это не число');
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

let namber = Number(prompt('Введите корректное положительное целое число'));

if (namber < 0) {
    console.log('namber меньше нуля');
} else if (namber < 10) {
    console.log('В числе ' + namber + ' количество сотен: 0, десятков: 0, единиц: ' + namber);
}else if (namber < 100) {
    console.log('В числе ' + namber + ' количество сотен: 0, десятков: ' + parseInt(namber/10) + ', единиц: ' + namber % 10);
}else if (namber < 1000) {
    let namberH = parseInt(namber/100);
    console.log('В числе ' + namber + ' количество сотен: ' + namberH + ', десятков: ' + parseInt((namber - namberH * 100)/10) + ', единиц: ' + namber % 10);
}else {
    let namberResult = namber % 1000;
    let namberH = parseInt(namberResult/100);
    console.log('В числе ' + namber + ' количество сотен: ' + namberH + ', десятков: ' + parseInt((namberResult - namberH * 100)/10) + ', единиц: ' + namberResult % 10);
}

