import React from "react";
import {useHistory, Link} from 'react-router-dom'
import { Col, Card } from "react-bootstrap";
import useGetPoster from '../hooks/useGetPoster'

const MovieCard = ({ movie }) => {
  const history = useHistory()
  const posterUrl = useGetPoster(movie.poster_path);
  return (
    <>
      {movie && (
      
        <Col xs={12} md={4} lg={2} onClick={()=>{history.push(`/movies/${movie.id}`)}}>
          <Card className={"my-3"}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body className={"d-flex flex-column justify-content-between"}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
          </Card>
          <Link to={`/movies/${movie.id}`}>Go</Link>
        </Col>
        
      )}
    </>
  );
};

export default MovieCard;
