import axios from 'axios'

//access to api key
const API_KEY = process.env.REACT_APP_API_KEY
axios.defaults.baseURL = `https://api.themoviedb.org/3`



const get = async (endpoint) => {
  const response = await axios.get(endpoint)
  return response.data
}

export const getPopularMovies = async () => {
  return get(`/movie/popular?api_key=${API_KEY}&region=us`)
  
}

export const getPlayingMovies = async () => {
  //get today
  // const threeDaysLater = dayjs().add(3, 'day').format('YYYY-MM-DD')
  // const response = await get(`?primary_release_date.lte=${threeDaysLater}&sort_by=primary_release_date.desc&api_key=${API_KEY}&region=us`)
  return get(`/movie/now_playing?api_key=${API_KEY}&region=us`)
  

}
export const getTopRatedMovies = async () => {
 return get(`/movie/top_rated?api_key=${API_KEY}&page=1&region=us`)
}

export const getGenre =async()=>{
  return get(`/genre/movie/list?api_key=${API_KEY}&region=us`)
}

export const getMoviesByGenre = async(id, page=null)=>{
  return get(`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${id}&region=us`)
}


// eslint-disable-next-line
export default {
getTopRatedMovies,
getPlayingMovies,
getPopularMovies,
getGenre,
getMoviesByGenre

}