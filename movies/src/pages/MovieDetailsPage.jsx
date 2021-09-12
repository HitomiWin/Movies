import React from "react";
import ActorCardList from "../components/ActorCardList"
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieDetails } from "../services/TMDBApi";
import { Container, Row, Col, Card } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";

const MovieDetailsPage =() => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["movie", id],() => getMovieDetails(id));
  const posterUrl = useGetPoster(data ? data.poster_path : null);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error has ocdured: {error.message} </p>;

  return (
    data && (
      <Container>
        <Card className={"mt-3 border-0"}>
          <Row>
            <Col sm={12} md={6} lg={3} >
              <Card.Img src={posterUrl} />
            </Col>

            <Col sm={12} md={6} lg={9} >
              <Card.Title className={"mt-2"}>{data.original_title}</Card.Title>
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
       <ActorCardList />
      </Container>
    )
  );
};
export default MovieDetailsPage;
