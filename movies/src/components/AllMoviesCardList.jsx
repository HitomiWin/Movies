import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import PaginationButtons from "./PaginationButtons";

const AllMoviesCardList = ({
  data,
  isPreviousData,
  page,
  setPage,
  paramsPage,
}) => {
  return (
    <>
      <Container className="px-0">
        <Row className="px-0">
          {data?.results &&
            data.results.map((movie, i) => (
              <Col xs={6} md={3} lg={2} className={"my-3 movie-card-wrapper"} key={i}>
                <MovieCard  movie={movie} />
              </Col>
            ))}
        </Row>
        <PaginationButtons
          page={page}
          setPage={setPage}
          paramsPage={paramsPage}
          totalPages={data.total_pages}
          isPreviousData={isPreviousData}
        />
      </Container>
    </>
  );
};

export default AllMoviesCardList;
