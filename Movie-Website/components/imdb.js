const url = 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '80c50463f1mshe288ac661da63a9p1d6adcjsn6ea75bfc13a4',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

async function fetchMovies() {
	
	try {
		const response = await fetch(url, options);
		// Turn the returned json into actual object
		const result = await response.json();
		console.log(result);
		console.log('9')
		return result
	} catch (error) {
		console.error(error);
	}
}

export default fetchMovies