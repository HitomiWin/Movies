import React from 'react'
import {useParams} from 'react-router-dom'
import { useQuery } from 'react-query'
import { getMoviesByPerson } from '../services/TMDBApi'
import MovieCardList from './MovieCardList'

const MoviesByPerson = () => {
  const { person_id } = useParams();
  const {data, isLoading, isError, error}=useQuery(["movies-peson", person_id], ()=>getMoviesByPerson(person_id))

  if(isError) return <p>An error has ocdured: {error.message} </p>
  if(isLoading) return <p>Loading...</p>

  return (
    <>
    <h1>Known For</h1>
      <MovieCardList data={data}/>
    </>
  )
}

export default MoviesByPerson
