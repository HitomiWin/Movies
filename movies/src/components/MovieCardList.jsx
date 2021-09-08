import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { getMovies } from '../services/TMDBApi'
import MovieCard from './MovieCard'

const MovieCardList = ({url}) => {

  const { isLoading, isError, error, data } = useQuery('movies',()=>getMovies(url))

  if(isLoading) return <p>Loading...</p>

  if(isError) return <p>An error has ocdured: {error.message} </p>

  return (
    <Container>
      <Row>
    {data && data.results.map((result,i)=>(
      <MovieCard key={i} movie={result}/>
    ))}
      </Row>
    </Container>
  )
}

export default MovieCardList
