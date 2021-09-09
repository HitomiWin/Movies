import React from 'react'
import { useQuery } from 'react-query'
import { getPlayingMovies } from '../services/TMDBApi'
import MovieCardList from './MovieCardList'

const PlayingMovies = () => {

  const { isLoading, isError, error, data } = useQuery('playing',()=>getPlayingMovies())

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>An error has ocdured: {error.message} </p>

  return (
   <>
   <MovieCardList data={data} />
   </>
  )
}

export default PlayingMovies