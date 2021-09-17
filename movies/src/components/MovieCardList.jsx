import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieCardList = ({ data }) => {
  return (
    <>
      <Row className="moviecard-list  flex-nowrap overflow-scroll">
        {data?.results?.map((result, i) => (
          <MovieCard movie={result} key={i} />
        ))}
      </Row>
    </>
  );
};

export default MovieCardList;
