import axios from 'axios'
import dayjs from 'dayjs'

//access to api key
const API_KEY = process.env.REACT_APP_API_KEY
axios.defaults.baseURL = `https://api.themoviedb.org/3/movie`



const get = async (endpoint) => {
  return await axios.get(endpoint)
}

export const getPopularMovies = async () => {
  const response = await get(`/popular?api_key=${API_KEY}&region=us`)
  return {
    ...response,
    results: response.data.results
  }
}

export const getPlayingMovies = async () => {
  //get today
  // const threeDaysLater = dayjs().add(3, 'day').format('YYYY-MM-DD')
  // const response = await get(`?primary_release_date.lte=${threeDaysLater}&sort_by=primary_release_date.desc&api_key=${API_KEY}&region=us`)
  const response = await get(`/now_playing?api_key=${API_KEY}&region=us`)
  return {
    ...response,
    results: response.data.results
  }

}
export const getTopRatedMovies = async () => {
  const response = await get(`/top_rated?api_key=${API_KEY}&language=en-US&page=1&region=us`)
  return {
    ...response,
    results: response.data.results
  }
}

export const getPoster = async (url) => {

}
// eslint-disable-next-line
export default {
getTopRatedMovies,
getPlayingMovies,
getPopularMovies

}