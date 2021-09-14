import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import GenresButtons from "../components/GenresButtons";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../services/TMDBApi";
import { useUrlSearchParams } from "use-url-search-params";
import { useGenresContext } from "../contexts/GenresContext";
import AllMoviesCard from "../components/AllMoviesCard";

const AllMoviesByGenre = () => {
  const { genre_id } = useParams();
  const [params, setParams] = useUrlSearchParams({ page: 1 }, { page: Number });
  const { page, genreName } = useGenresContext();

  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["movies-genre", genre_id, params.page],
    () => getMoviesByGenre(genre_id, params.page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setParams({ ...params, page });
    // eslint-disable-next-line
  }, [genre_id, page]);

  
  if (isLoading) return <Spinner animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );
  return (
    <Container className="mt-2">
      <h1>Genres</h1>
      <Row className="justify-content-center">
        <Col md="auto">
          <GenresButtons />
        </Col>
        <Col md="auto">
          <h1>Genre: {genreName}</h1>
          <AllMoviesCard  data={data} isPreviousData={isPreviousData} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllMoviesByGenre;
