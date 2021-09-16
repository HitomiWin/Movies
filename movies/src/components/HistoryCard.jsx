import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";

const HitoryCard = ({ movie }) => {
  const history = useHistory();
  const posterUrl = useGetPoster(movie.poster_path);
  const handleOnClick = ()=>{
      history.push(`/movie/${movie.id}`)
  }
  return (
    <>
      {movie && (     
          <Card className="movie-card"   onClick={handleOnClick}>
            <Card.Img variant="top" src={posterUrl} alt="no image"  height="250" className="image"/>
            <Card.Body className={"d-flex flex-column justify-content-between"}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
          </Card>
    
      )}
    </>
  );
};

export default HitoryCard;
