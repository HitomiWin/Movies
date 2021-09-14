import React from 'react'
import { useQuery } from 'react-query'
import { getCategorizedMovies } from '../services/TMDBApi'
import MovieCardList from './MovieCardList'

const CategorizedMovies = ({type, title}) => {

  const { isLoading, isError, error, data } = useQuery(type,()=>getCategorizedMovies(type))

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>An error has ocdured: {error.message} </p>

  return (
   <div className="py-3">
   <h1>{title}</h1>
   <MovieCardList data={data} />
   </div>
  )
}

export default CategorizedMovies