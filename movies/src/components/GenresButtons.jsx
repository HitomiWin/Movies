import React from "react";
import { Button } from "react-bootstrap";

const GenresButtons = ({ genres, title, isLoading, isError, error }) => {
  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has ocdured: {error.message} </p>;

  return (
    <>
      {genres.map((genre) => (
        <Button key={genre.id} variant="outline-dark" size="sm" className="m-1 rounded-pill">
          {genre.name}
        </Button>
      ))}
    </>
  );
};

export default GenresButtons;
