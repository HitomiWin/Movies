import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import PaginationButtons from "./PaginationButtons";

const AllMoviesCard = ({ data, isPreviousData }) => {
 
  return (
    <>
      <Container className="px-0">
        <Row className="px-0">
          {data?.results &&
            data.results.map((movie, i) => <MovieCard key={i} movie={movie} />)}
        </Row>
        <PaginationButtons
          totalPages={data.total_pages}
          isPreviousData={isPreviousData}
        />
      </Container>
    </>
  );
};

export default AllMoviesCard;
