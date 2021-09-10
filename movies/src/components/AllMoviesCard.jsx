import React from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const AllMoviesCard = ({ data }) => {

  return (
    <Container>
      <Row >
        {data &&
          data.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
      </Row>
    </Container>
  );
};

export default AllMoviesCard;
