import React,{ useState } from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/TMDBApi";
import PaginationButtons from "./PaginationButtons";

const AllMoviesCard= () => {
  const [page, setPage] = useState(1)
  const [id, setId]=useState(16)
  const { data, isLoading, isError, error, isPreviousData } = useQuery(["movies-genre",id, page], ()=>getMoviesByGenre(id, page),{

    staleTime: 1000 * 60 * 5, // 5 mins // stop to refetch unnecessarily
    cacheTime: 1000 * 60 * 30,
    keepPreviousData:true
  });

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>An error has ocdured: {error.message} </p>

  return (
    <Container>
      <Row >
        {data?.results &&
          data.results.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
      </Row>
      <PaginationButtons totalPages={data.total_pages} page={page} setPage={setPage} isPreviousData={isPreviousData} />
    </Container>
  );
};

export default AllMoviesCard;
