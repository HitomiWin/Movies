import React from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenre } from "../services/TMDBApi";

const GenresButtons = () => {
  const { data, isLoading, isError, error } = useQuery("genre", getGenre);
  
  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has ocdured: {error.message} </p>;

  return (
    <>
      {data?.genres && data.genres.map((genre) => (
        <Button key={genre.id} variant="outline-dark" size="sm" className="m-1 rounded-pill">
          {genre.name}
        </Button>
      ))}
    </>
  );
};

export default GenresButtons;
