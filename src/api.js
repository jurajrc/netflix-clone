
const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "5a6f37a02377fadf0e6bfa71a67137ac"

export const POPULAR_API = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-ýUS&page=1`
export const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`

// Get the primary information about a movie.
export const searchMovieURL = (movie_id) => `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=sk`

// Get the most newly created movie
export const LATEST_API = `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`



// url video + id youtube
export const URL_VIDEO = "https://www.youtube.com/watch?v="
// url image - size: w300 w500 original + _path
export const URL_IMAGE_W300 = "https://image.tmdb.org/t/p/w300"
export const URL_IMAGE_ORIGNAL = "https://image.tmdb.org/t/p/original"