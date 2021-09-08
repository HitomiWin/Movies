import axios from 'axios'

//access to api key
const API_KEY = process.env.REACT_APP_API_KEY
axios.defaults.baseURL = `https://api.themoviedb.org/3/movie`

const get = async(endpoint)=>{
  return await axios.get(endpoint)
}

export const getMovies =async(url)=>{
  const response = await get(`${url}?api_key=${API_KEY}&region=us`)
  return {
    ...response,
    results:response.data.results
  }
}

export const getPoster = async(url)=>{
  
}




