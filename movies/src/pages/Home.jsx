import React from 'react'
import MovieCardList from '../components/MovieCardList'

const Home = () => {
  return (
    <div>
      <h1>You can watch now</h1>
      <MovieCardList url={"/now_playing"}/>
      <h1>Popular Movies</h1>
      <MovieCardList url={"/popular"}/>
      <h1>Top List</h1>
      <MovieCardList url={"/top/rated"}/>
    </div>
  )
}

export default Home
