'use strict';

// цикл в циле

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}


// -------------
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

	for (let j = 0; j < i; j++) {
		result += '*';
	}

	result += '\n';
}

console.log(result);


// ----------------

first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;   // beak - прекратить 
			console.log(`Third level: ${k}`);
		}
	}

}

// 1
let num = 5;

for (let i = 0; i <= 5; i++) {
	console.log(num);
	num++;
}

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
let num2 = 20;

first: for (let i = 10; i >= 0; i--) {
	if (num2 === 13) break first;
	console.log(num2);
	num2--;
}

first: for (let i = 10; i >= 0; i--) {
	if (num2 === 13) {
		break first;
	}
	console.log(num2);
	num2--;
}

//При помощи цикла for выведите чётные числа от 2 до 10 включительно

let num3 = 2;

for (let i = 0; i <= 8; i++) {
	if (num3 % 2 === 0) {
		console.log(num3);
	}
	num3++;
}

//Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

let i = 2;

while (i < 16) {
	if (i % 2 === 0) {
		i++;
		continue;
	} else {
		console.log(i);
	}
	i++;
}

//5. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
	arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;


