(async function() {
	const response = await fetch('./data.json');
	const movies = await response.json();

	const inputGenre = document.getElementById('genre');
	const inputYear = document.getElementById('year');
	const inputLang = document.getElementById('lang');
	const inputRating = document.getElementById('rating');

	// function searchByYear() {
	// 	const query = inputYear.value;
	// 	const result = movies.filter(function(movie) {
	// 		return movie.release_date.includes(query);
	// 	});
	// 	console.log(result);
	// }

	// function searchByLang() {
	// 	const query = inputLang.value;
	// 	const result = movies.filter(function (movie) {
	// 		return movie.original_language.toLowerCase().includes(query);
	// 	});
	// 	console.log(result);
	// }

	// function searchByGenre() {
	// 	const query = inputGenre.value;
	// 	const result = movies.filter(function(movie) {
	// 		return movie.genres.includes(query);
	// 	});
	// 	console.log(result);
	// }
	
	// function searchByRating() {
	// 	const query = inputRating.value;
	// 	const result = movies.filter(function (movie) {
	// 		return movie.vote_average.includes(query);
	// 	});
	// 	console.log(result);
	// }

	// function search() {
	// 	const queryGenre = inputGenre.value;
	// 	const queryYear = inputYear.value;
	// 	const queryLang = inputLang.value;
	// 	const queryRating = inputRating.value;

	// 	const result = movies.filter(function(movie) {
	// 		return movie.genres.includes(queryGenre) && movie.release_date.includes(queryYear) && movie.original_language.toLowerCase().includes(queryLang) && movie.vote_average === queryRating;
	// 	});
	// 	console.log(result);
	// }

	// inputGenre.addEventListener('click', searchByGenre);
	// inputYear.addEventListener('click', searchByYear);

	let v = JSON.parse(movies);
})();