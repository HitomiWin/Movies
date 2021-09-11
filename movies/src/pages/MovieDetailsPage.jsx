import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieDetails } from "../services/TMDBApi";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["movie", id],
    () => getMovieDetails(id),
    {
      staleTime: 1000 * 60 * 5, // 5 mins // stop to refetch unnecessarily
      cacheTime: 1000 * 60 * 30,
    }
  );
  const posterUrl = useGetPoster(data ? data.poster_path : null);
  console.log(error);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error has ocdured: {error.message} </p>;

  return (
    data && (
      <Container>
        <Card className={"mt-3 border-0"}>
          <Row>
            <Col sm={12}>
              <Card.Img variant="top" src={posterUrl} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{data.original_title}</Card.Title>
                <Card.Text>
                  Release: {data.release_date} / {data.runtime} mins
                </Card.Text>
                <Card.Text>
                  {data.genres.map((genre) => genre.name).join(" ")}
                </Card.Text>
                <Accordion defaultActiveKey="0" className={"border-0"}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Overview</Accordion.Header>
                    <Accordion.Body>{data.overview}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className={"border-0"}>
          <Card.Title>Cast</Card.Title>
          <Card></Card>
        </Card>
      </Container>
    )
  );
};
export default MovieDetailsPage;
