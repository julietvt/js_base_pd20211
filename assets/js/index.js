// инструкция ;
/* 
Простые типы данных:

1 boolean (Булев, Логический тип) true, false (1,0)
2 number (Число) 0 100 -100 3.15 0.33333333 -1.5 
3 string (Строка) "" или '' . Пример "hello", "Hello, wolrd!!!", "Y", ""
4 bigint
5 symbol
6 undefined (Неопределённый тип) непроинициализировано let x;

- null
- object
- function
*/

let s1 = 'hello',
  s2 = 'Vasya';
let res;
res = s1 + ' ' + s2;
console.log(res);

let x1 = 5,
  x2 = 10;
res = x1 + x2;
console.log(res);
console.log('Result is ', res);
console.log(`Result is ${res}`);

/*
Задачи
1 объявите переменные со значениями “hello js”, 100, 5.5, true а также константу со значением красного цвета. 
Выведите все значения в консоль

2 объявите необходимые переменные для вычисления площади треугольника по форомуле s = ½ * a * h. 
выполните вычисления

// Решение
// task 1
let x3 = 'Hello, js',
  x4 = 100,
  x5 = 5.5,
  x6 = true;
console.log(x3, ' ', x4, ' ', x5, ' ', x6);
alert(`1 Results: x3=${x3}, x4=${x4}, x5=${x5}, x6=${x6}.`);

// task 2
let a, h, s;
//a = 10, h = 5;
//a = 10;
//h = 5;
a = prompt('Enter value a');
h = prompt('Enter value h');
s = (1 / 2) * a * h;
console.log('Площадь треугольника ', s);
alert(`2 Result is ${s}`);
*/

//operator +
console.log('-----------------------------');
let x7 = 100,
  x8 = 200;
res = x7 + x8;
console.log(res);
let x9 = 'hello',
  x10 = 'Vasya';
res = x9 + ', ' + x10 + '!!!';
console.log(res);

// sum
// преобразование в число
// 1 способ оператор + Example +x
// 2 способ Number() Example Number(x)
// для логических значений Boolean()
// для строки String()

//let x11 = +prompt('1 number'); // x11 string
//let x12 = +prompt('2 number');
//let x11 = prompt('1 number');
//let x12 = prompt('2 number');
//res = Number(x11) + Number(x12);
//console.log(res);

// операторы
// + * / -
// % остаток от деления
// ** возведение в степень
let x13 = 10,
  x14 = 3;
console.log('-----------------------------');
console.log('деление ', x13 / x14);
console.log('остаток от деления ', x13 % x14);
console.log('возведение в степень ', x13 ** x14); // 10^3
// корень квадратный из 25
res = 25 ** (1 / 2);
console.log('корень квадратный из 25: ', res);
// корень кубический из 1000
res = 1000 ** (1 / 3);
console.log('куб корень из 1000: ', res);

// унарный минус
let x15 = 5;
res = -x15; // -5
/*!!! отличать от res -= x15; // res = res - 5 */
console.log(res);

/*
Домашка
//Task 3
// у нас есть 3-х значное число. вывести его цифры
let userValue = 597;
let lastDigit, middleDigit, firstDigit;
lastDigit = userValue % 10;
console.log('-----------------------------');
console.log(lastDigit);
console.log(middleDigit);
console.log(firstDigit);
*/

//Оператор сравнения == сравнение по значению
// оператор сторое равенство === сравнение по типу и значению
// проверка на четность
let x16 = 10;
console.log('-----------------------------');
console.log(x16 % 2 == 0);
// typeof() для проверки типов

/*
// условный оператор if
if(условие){
    // действие 1
    // действие 2
    // действие 3
    // ююю
}
*/
console.log('-----------------------------');
let userValue1;
userValue1 = 200;
//userValue1 = prompt('Enter some value');
/* 
равно == или еще с типом ===
больше >
меньше <
больше или равно >=
меньше или равно <=
неравно != или еще с типом !==
*/
// проверить равно ли введенное число 100 ?
if (userValue1 == 100) {
  console.log('Число равно 100');
}
if (userValue1 > 100) {
  console.log('Число больше 100');
}
if (userValue1 < 100) {
  console.log('Число меньше 100');
}
if (userValue1 != 100) {
  console.log('Число не равно 100');
}

// вернемся к задаче о четном числе
if (userValue1 % 2 == 0) {
  console.log(`Число ${userValue1} является четным`);
}

/*
Блок if-else

если условие выполняется , то делаем действия в блоке if
иначе (условие НЕ выполняется) переходим в блок else и 
выполняем действия в блоке if

if(условие){
    //действие
    //действие
    //...
} else{
    // другое действие
    // другое действие
    // ...
}

*/

// вернемся к задаче о четном числе
console.log('-----------------------------');
if (userValue1 % 2 == 0) {
  console.log('Число является четным');
} else {
  console.log('Число является нечетным');
}

/*
Tasks
3 вычислите стоимость покупки , которая состоит из N тетрадей (price1 грн) и  M ручек (price2 грн)
4 обьявить переменную и дать ей значение (проинициализировать) или prompt. если переменная меньше 10 умножить ее на 30 
иначе вычесть 100

5* Напишите программу которая проверяет правильно ли пользователь вычислил “2+2”
6* решить task задачу с учетом скидки 2% если сумма покупки превысит 500 грн
*/

// решение
console.log('-----------------------------');
// task 3
let n1 = 3,
  price1 = 15.5,
  n2 = 5,
  price2 = 21,
  sumBuy;
sumBuy = n1 * price1 + n2 * price2;
console.log('Task1: ', sumBuy);
// task 4
let val1 = 20;
// let val1 = prompt('Enter some value');
if (val1 < 10) {
  val1 = val1 * 30; // val1 *= 30;
} else {
  val1 = val1 - 100; // val1 -= 100;
}
console.log('Task2: ', val1);
// task 5
let val2;
val2 = prompt('2+2=?');
if (val2 == 4) {
  alert('yes. you are right!');
} else {
  alert('sorry(((');
}
// task 6
if (val1 >= 500) {
  val1 = val1 * 0.98;
}
console.log('Sum with diskont is', val1);

/*
if (условие1)
   инструкция1
else if (условие2)
   инструкция2
else if (условие3)
   инструкция3
...
else
   инструкция

*/

/*
let val3 = prompt();
if (val3 == 1) {
  console.log('число равно 1');
} else if (val3 == 2) {
  console.log('число равно 2');
} else if (val3 == 3) {
  console.log('число равно 3');
} else {
  console.log('число НЕ равно 1 , 2 или 3');
}
*/

let userRole;
if (userRole == 'user') {
  // действия
} else if (userRole == 'moderator') {
  // действия
} else if (userRole == 'admin') {
  // действия
} else {
  console.log('Неопределенная роль. Прав нет');
}

// логические операторы для условия
// И &&
// ИЛИ ||
/*
let val4 = prompt();
// проверим находится ли число от 0 до 100
if (val4 > 0 && val4 < 100) {
  console.log('число от 0 до 100');
} else {
  console.log('число НЕ от 0 до 100');
}
*/

// задача определить в какую четверть часа тноситься введенное число минут
//1 : 0 -15
//2: 15-30
//3: 30-45
//4: 45-60
let valMinutes = prompt('Enter minutes (0-60)');
let partOfHour;
if (valMinutes > 0 && valMinutes < 15) {
  partOfHour = 1;
} else if (valMinutes >= 15 && valMinutes < 30) {
  partOfHour = 2;
} else if (valMinutes >= 30 && valMinutes < 45) {
  partOfHour = 3;
} else {
  partOfHour = 4;
}
console.log(`${partOfHour} part of a hour`);
