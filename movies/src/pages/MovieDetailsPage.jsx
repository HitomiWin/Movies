import React, { useEffect } from "react";
import PersonCardList from "../components/PersonCardList";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieDetails } from "../services/TMDBApi";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";
import RelatedMovies from "../components/RelatedMovies";
import useLocalStorage from "../hooks/useLocalStorage";

const MovieDetailsPage = () => {
  const { movie_id } = useParams();
  // eslint-disable-next-line
  const [savedMovies, setSavedMovies] = useLocalStorage("movies", []);
  const { data, isLoading, isError, error } = useQuery(
    ["movie", movie_id],
    () => getMovieDetails(movie_id)
  );

  useEffect(() => {
    if (savedMovies.length > 10) {
      setSavedMovies((prev) => prev.slice(0, 10));
    }
    // eslint-disable-next-line
  }, [savedMovies.length]);

  useEffect(() => {
    const now = new Date();
    setSavedMovies((prev) => [
      {
        id: movie_id,
        day: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      },
      ...prev,
    ]);

    // eslint-disable-next-line
  }, [movie_id]);

  const posterUrl = useGetPoster(data?.poster_path);
  if (isLoading)
    return <Spinner className="text-center" animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    data && (
      <Container>
        <Card className={"mt-3 border-0"}>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card.Img src={posterUrl} className="image" alt="No image" />
            </Col>

            <Col sm={12} md={6} lg={9}>
              <h1>{data.original_title}</h1>
              <Card.Text>
                Release: {data.release_date} / {data.runtime} mins
              </Card.Text>
              <Card.Text>
                {data.genres.map((genre) => genre.name).join(" ")}
              </Card.Text>
              <Card.Title>Overview</Card.Title>
              <Card.Text>{data.overview}</Card.Text>
            </Col>
          </Row>
        </Card>
        <PersonCardList cast={data.credits.cast} />
        <RelatedMovies
          genre={data.genres[0]?.id}
          year={data.release_date.slice(0, 4)}
        />
      </Container>
    )
  );
};
export default MovieDetailsPage;
