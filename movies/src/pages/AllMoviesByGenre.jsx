import { Container, Row, Col } from "react-bootstrap";
import GenresButtons from "../components/GenresButtons";
import AllMoviesCard from "../components/AllMoviesCard";

const AllMoviesByGenre = () => {
  

  return (
    <Container className="mt-2">
      <h1>Genres</h1>
      <Row className="justify-content-center">
        <Col md="auto"> 
          <GenresButtons  />
        </Col>
        <Col md="auto">
          <h1>Genre:</h1>
         <AllMoviesCard  />
        </Col>
      </Row>
    </Container>
  );
};

export default AllMoviesByGenre;