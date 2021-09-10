import React,{ useState } from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/TMDBApi";

const AllMoviesCard = () => {
  const [page, setpage] = useState(1)
  const [id, setId]=useState(16)
  const { data, isLoading, isError, error } = useQuery(["movies-genre",id, page], ()=>getMoviesByGenre(id, page));

 
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
    </Container>
  );
};

export default AllMoviesCard;
