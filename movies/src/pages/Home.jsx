import React from 'react'
import CategorizedMovies from '../components/CategorizedMovies'

const Home = () => {

  return (
    <div>
      <h1>What's Popular</h1>
      <CategorizedMovies type={"popular"} />
      <h1>Playing Movies</h1>
      <CategorizedMovies type={"now_playing"}/>   
      <h1>Top 20 Movies</h1>
      <CategorizedMovies type={"top_rated"} />  
    </div>
  )
}

export default Home
