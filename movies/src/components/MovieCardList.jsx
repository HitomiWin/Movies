import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieCardList = ({ data }) => {
  return (
    <>
      <Row className="moviecard-list  flex-nowrap overflow-scroll">
        {data?.results?.map((result, i) => (
          <Col xs={6} md={3} lg={2} className={"my-3 movie-card-wrapper"}  key={i}>
            <MovieCard movie={result} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MovieCardList;
