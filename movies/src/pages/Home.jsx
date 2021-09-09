import React from 'react'
import PopularMovies from '../components/PopularMovies'
import PlayingMovies from '../components/PlayingMovies'
import TopRatedMovies from '../components/TopRatedMovies'

const Home = () => {

  return (
    <div>
      <h1>What's Popular</h1>
      <PopularMovies />
      <h1>Playing Movies</h1>
      <PlayingMovies />     
      <h1>Top 20 Movies</h1>
      <TopRatedMovies />     
    </div>
  )
}

export default Home
