import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import AllMoviesCard from "../components/AllMoviesCard";

const AllMoviesBySearch = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col lg={8}>
        <InputGroup>
          <InputGroup.Text id="input-search">
            Search
          </InputGroup.Text>
          <FormControl
            aria-label="Search"
            aria-describedby="input-search"
            placeholder="search movies"
          />
        </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AllMoviesBySearch;
