import HistoryList from "../components/HistoryList";
import useLocalStorage from "../hooks/useLocalStorage";
import { Col, Row } from "react-bootstrap";

const HistoryPage = () => {
  // eslint-disable-next-line
  const [savedMovies, setSavedMovies] = useLocalStorage("movies", []);

  return (
    <>
      <Row className="justify-content-center">
          {savedMovies?.map((movie, i) => (
          <Col xs={6} md={3} lg={2} className={"my-3 movie-card-wrapper"} >
            <HistoryList movie={movie} key={i}/>
        </Col>
          ))}
      </Row>
    </>
  );
};

export default HistoryPage;
