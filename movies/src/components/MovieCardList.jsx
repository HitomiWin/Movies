import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'

const MovieCardList = ({data}) => {
  return (
    <Container>
      <Row  className="d-flex flex-nowrap overflow-scroll">
    {data && data.results.map((result,i)=>(
      <MovieCard key={i} movie={result}/>
    ))}
      </Row>
    </Container>
  )
}

export default MovieCardList
