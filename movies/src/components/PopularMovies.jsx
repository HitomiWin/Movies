import React from 'react'
import { useQuery } from 'react-query'
import { getPopularMovies } from '../services/TMDBApi'
import MovieCardList from './MovieCardList'

const PopularMovies = () => {

  const { isLoading, isError, error, data } = useQuery('popular',()=>getPopularMovies())

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>An error has ocdured: {error.message} </p>

  return (
   <>
   <MovieCardList data={data} />
   </>
  )
}

export default PopularMovies