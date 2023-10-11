const API_KEY = "6b7a47c8146f05805a981bc66474a865";

const requests = {
    fetchingTrend : `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrigin: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `https://api.themoviedb.org/3/search/collection?api_key=${API_KEY}&query=action&include_adult=false&language=en-US&page=1`,
    fetchComedyMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=comedy&include_adult=false&language=en-US&page=1`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=horror&include_adult=false&language=en-US&page=1`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=romance&include_adult=false&language=en-US&page=1`,
    fetchDocumentryMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=documentaries&include_adult=false&language=en-US&page=1`,

}

export default requests;