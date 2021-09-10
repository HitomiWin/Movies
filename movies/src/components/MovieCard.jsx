import React from "react";
import { Col, Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <>
      {movie && (
        <Col xs={12} md={4} lg={2}>
          <Card className={"my-3"}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body className={"d-flex flex-column justify-content-between"}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default MovieCard;
