'use strict';

// циклы

let num = 50;

for (let i = 1; i < 8; i++) {
	console.log(num);
	num++;
}

// 
for (let i = 1; i < 10; i++) {
	if (i === 6) {
		// break;
		continue;
	}
	console.log(i);
}