import React from "react";
import { Button } from "react-bootstrap";

import {useGenresContext} from "../contexts/GenresContext"

const GenresButtons = () => {
  const { getGenreId, getGenreName, data,
    isLoading,
    isError,
    error, }= useGenresContext()
 

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has ocdured: {error.message} </p>;
  const handleOnClick=(id, name)=>{
    getGenreId(id)
    getGenreName(name)
  }
  return (
    <>
      {data?.genres &&
        data.genres.map((genre) => (
          <Button
            key={genre.id}
            variant="outline-dark"
            size="sm"
            className="m-1 rounded-pill"
            onClick={()=>handleOnClick(genre.id, genre.name)}
          >
            {genre.name}
          </Button>
        ))}
    </>
  );
};

export default GenresButtons;
