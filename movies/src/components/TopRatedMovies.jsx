import React from 'react'
import { useQuery } from 'react-query'
import { getTopRatedMovies } from '../services/TMDBApi'
import MovieCardList from './MovieCardList'

const TopRatedMovies = () => {

  const { isLoading, isError, error, data } = useQuery('top-rate',()=>getTopRatedMovies())

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>An error has ocdured: {error.message} </p>

  return (
   <>
   <MovieCardList data={data} />
   </>
  )
}

export default TopRatedMovies