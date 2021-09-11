import axios from 'axios'

//access to api key
const API_KEY = process.env.REACT_APP_API_KEY
axios.defaults.baseURL = `https://api.themoviedb.org/3`


const get = async (endpoint) => {
  const response = await axios.get(endpoint)
  return response.data
}


export const getCategorizedMovies = async (type) =>{
  return get(`/movie/${type}?api_key=${API_KEY}&region=us`)
}

export const getGenre =async()=>{
  return get(`/genre/movie/list?api_key=${API_KEY}&region=us`)
}

export const getMoviesByGenre = async(id=16, page=null)=>{
  return get(`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${id}&region=us`)
}


// eslint-disable-next-line
export default {
getCategorizedMovies,
getGenre,
getMoviesByGenre

}