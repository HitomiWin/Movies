import React from 'react'
import { useQuery } from 'react-query'
import { getMovies } from '../services/TMDBApi'

const MovieCardList = ({url}) => {

  const { isLoading, isError, error, data } = useQuery('movies',()=>getMovies(url))

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>An error has ocdured: </p>+ error.message
  console.log(data)

  return (
    <div>
    {data && data.results.map(result=>(result.title))}
      
    </div>
  )
}

export default MovieCardList
