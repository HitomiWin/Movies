import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/TMDBApi";
import PaginationButtons from "./PaginationButtons";
import { useUrlSearchParams } from "use-url-search-params";
import { useGenresContext } from "../contexts/GenresContext";

const AllMoviesCard = ({title}) => {

  const [params, setParams] = useUrlSearchParams(
    { genreId: null, page: 1 },
    {  id:Number, page: Number }
    );
    const{ genreId, genreName } =useGenresContext()
  const [page, setPage] = useState(params.page);
  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["movies-genre", params],
    () => getMoviesByGenre(params),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setParams({ ...params, genreId, page });
    // eslint-disable-next-line
  }, [genreId, page]);

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
        page={page}
        setPage={setPage}
        isPreviousData={isPreviousData}
      />
    </Container>
  );
};

export default AllMoviesCard;
