'use strict';

// циклы

//while
let numb = 50;

while (numb <= 55) {
	console.log(numb);
	numb++;
}

// do
let numb2 = 50;

do {

	console.log(numb2);
	numb2++;
}
while (numb2 <= 55);



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