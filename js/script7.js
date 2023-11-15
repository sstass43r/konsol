'use strict';

// 25. Функции, стрелочные ф-ции (ES6)

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

showFirstMessage('hello world');
console.log(num);

//
function calc(a, b) {
	return a + b;
}
console.log(calc(4, 3));

//
function ret() {
	let num = 50;

	//
	return num;
}
const anotherNum = ret();
console.log(anotherNum);

///
const logger = function () {
	console.log('lkjkj ddd')
};

logger();


//
const calc2 = (a, b) => a + b;
const calc3 = (a, b) => { 
	console.log('1');
	return a + b;
};

calc2(1, 2);
calc3();