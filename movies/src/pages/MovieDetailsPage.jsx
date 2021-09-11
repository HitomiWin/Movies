import React from "react";
import { useParams } from 'react-router-dom'
// import { useQuery } from "react-query";
// import { getMovieDetails } from "../services/TMDBApi";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import useGetPoster from "../hooks/useGetPoster";

const MovieDetailsPage = () => {
  const {id} =useParams()

  console.log(useParams())
  // const { data, isLoading, isError, error } = useQuery([
  //   ["movie", id],
  //   () => getMovieDetails(id),
  //   {
  //     staleTime: 1000 * 60 * 5, // 5 mins // stop to refetch unnecessarily
  //     cacheTime: 1000 * 60 * 30,
  //   },
  // ]);
  // const posterUrl = useGetPoster(data?data.belongs_to_collection.poster_path:null);
  // console.log(error)
  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>An error has ocdured: {error.message} </p>;

  return (
    <div>this is {id}   page</div>
  )
  // return data &&(
  //   <Container>
  //     <Row>
  //       <Col>
  //         <Card className={"my-3"}>
  //           <Card.Img variant="top" src={posterUrl} />
  //           <Card.Body className={"d-flex flex-column justify-content-between"}>
  //             <Card.Title>{data.belongs_to_collection.name}</Card.Title>
  //           </Card.Body>
  //         </Card>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};
export default MovieDetailsPage;
