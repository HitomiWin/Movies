import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";
import {useParams} from 'react-router-dom'
import { getMoviesByGenre } from "../services/TMDBApi";
import PaginationButtons from "./PaginationButtons";
import { useUrlSearchParams } from "use-url-search-params";
import { useGenresContext } from "../contexts/GenresContext";

const AllMoviesCard = ({title}) => {
  const {id} =useParams()
  const [params, setParams] = useUrlSearchParams(
    { page: 1 },
    { page: Number }
    );
    const{ page, genreName } =useGenresContext()

  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["movies-genre", id,params.page],
    () => getMoviesByGenre(id, params.page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setParams({ ...params, page });
    // eslint-disable-next-line
  }, [id, page]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error has ocdured: {error.message} </p>;

  return  (
    <Container>
      <h1>{title} {genreName}</h1>
      <Row>
        {data?.results &&
          data.results.map((movie, i) => <MovieCard key={i} movie={movie} />)}
      </Row>
      <PaginationButtons
        totalPages={data.total_pages}
        isPreviousData={isPreviousData}
      />
    </Container>
  );
};

export default AllMoviesCard;
