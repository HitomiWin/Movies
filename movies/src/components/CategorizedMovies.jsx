import React from 'react'
import { useQuery } from 'react-query'
import { getCategorizedMovies } from '../services/TMDBApi'
import MovieCardList from './MovieCardList'

const CategorizedMovies = ({type}) => {

  const { isLoading, isError, error, data } = useQuery(type,()=>getCategorizedMovies(type))

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>An error has ocdured: {error.message} </p>

  return (
   <>
   <MovieCardList data={data} />
   </>
  )
}

export default CategorizedMovies