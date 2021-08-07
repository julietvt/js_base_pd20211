// инструкция ;
/* 
Простые типы данных:

1 boolean (Булев, Логический тип) true, false (0,1)
2 number (Число) 0 100 -100 3.15 0.33333333 -1.5 
string (Строка) "" или '' . Пример "hello", "Hello, wolrd!!!", "Y", ""
bigint
symbol
undefined (Неопределённый тип) непроинициализировано let x;

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
*/
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
