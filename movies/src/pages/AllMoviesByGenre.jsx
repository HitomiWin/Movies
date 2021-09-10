import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenre, getMoviesByGenre } from "../services/TMDBApi";
import GenresButtons from "../components/GenresButtons";
import AllMoviesCard from "../components/AllMoviesCard";

const AllMoviesByGenre = () => {
  const [page, setpage] = useState(1)
  const [id, setId]=useState(16)
  const { data, isLoading, isError, error } = useQuery("genre", getGenre);
  const { data: movies, isLoading:isMoviesLoding, isError:isMoviesError, error:moviesError } = useQuery(["movies-genre",id, page], ()=>getMoviesByGenre(id, page));
  if(movies)console.log(movies)
 
  if(isMoviesLoding || isLoading) return <p>Loading...</p>
  if(isMoviesError|| isError) return <p>An error has ocdured: {moviesError.message} </p>


  return (
    <Container className="mt-2">
      <h1>Genres</h1>
      <Row className="justify-content-center">
        <Col md="auto">
          {data &&
          <GenresButtons genres={data.genres} title={"Genres"}  />
          }
        </Col>
        <Col md="auto">
          <h1>Genre:</h1>
          {movies&&<AllMoviesCard data={movies.results} />}
        </Col>
      </Row>
    </Container>
  );
};

export default AllMoviesByGenre;
