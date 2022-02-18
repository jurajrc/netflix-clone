
const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "5a6f37a02377fadf0e6bfa71a67137ac"

export const POPULAR_API = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-ýUS&page=1`
export const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`
export const searchMovieURL = (movie_id) => `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=sk`