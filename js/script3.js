// логические операторы
'use strict';

// 1
const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries) {
	console.log('Все сыты!')
} else {
	console.log('Мы уходим')
}

// 2
let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

// 3
const hamburgerTwo = 3;
const friesTwo = 3;
const cola = 0;
const nuggets = 2;

if (hamburgerTwo === 3 && cola === 2 || friesTwo === 3 && nuggets) {
	console.log('Все сыты!')
} else {
	console.log('Мы уходим')
}

console.log(hamburgerTwo === 3 && cola === 2 || friesTwo === 3 && nuggets);


let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;


if (hamburger || cola || fries === 3 || nuggets) {
	console.log('Done!')
}