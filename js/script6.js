// 24. Практика, ч2. Применяем условия и циклы

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', '');
// 	b = prompt('На сколько оцените его?', '');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && !isNaN(parseFloat(b))) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('все ок');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

// while
let i = 0;

while (i < 2) {
	const a = prompt('Один из последних просмотренных фильмов?', '');
	let b = prompt('На сколько оцените его?', '');

	if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && !isNaN(parseFloat(b))) {
		personalMovieDB.movies[a] = +b;
		console.log('все ок');
	} else {
		console.log('error');
		i--;
	}

	i++;
}
//

if (personalMovieDB.count < 10) {
	console.log('Мало фильмов');
}
else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
	console.log('вы классический зритель');
}
else if (personalMovieDB.count > 30) {
	console.log('вы киноман');
}
else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);



