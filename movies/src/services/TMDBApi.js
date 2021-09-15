import axios from 'axios'

//access to api key
const API_KEY = process.env.REACT_APP_API_KEY
axios.defaults.baseURL = `https://api.themoviedb.org/3`


const get = async (endpoint) => {
  const response = await axios.get(endpoint)
  return response.data
}

export const getCategorizedMovies = async (type) => {
  return get(`/movie/${type}?api_key=${API_KEY}&region=us&language=en-US`)
}

export const getGenre = async () => {
  return get(`/genre/movie/list?api_key=${API_KEY}&region=us&language=en-US`)
}

export const getMoviesByGenre = async (genreId, page = 1) => {
  return get(`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genreId}&language=en-US&region=us`)
}

export const getMovieDetails = async (id) => {
  return get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
}

export const getPerson = async (person_id) => {
  return get(`/person/${person_id}?api_key=${API_KEY}&language=en-US`)
}

export const getMoviesByPerson = async (person_id) => {
  return get(`/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&with_people=${person_id}`)
}

export const getRelatedMovies = async (genre, year) =>{
  return get(`/discover/movie?with_genres=${genre}&primary_release_year=${year}&api_key=${API_KEY}&include_adult=false`)
}

export const getMoviesBySearch = async ({query=null, page=1}) =>{
  return query?
  get (`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
  : null
}

export const getTrendingMovies = async (time_window)=>{
  return get(`/trending/movie/${time_window}?api_key=${API_KEY}`)
}


// eslint-disable-next-line
export default {
  getCategorizedMovies,
  getGenre,
  getMoviesByGenre,
  getMovieDetails,
  getPerson,
  getMoviesByPerson,
  getRelatedMovies,
  getMoviesBySearch,
  getTrendingMovies
}