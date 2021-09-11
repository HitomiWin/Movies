import React from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenre } from "../services/TMDBApi";
import {useGenresContext} from "../contexts/GenresContext"

const GenresButtons = () => {
  const { getGenreId }= useGenresContext()
  const { data, isLoading, isError, error } = useQuery("genre",()=>getGenre(), {
    staleTime: 1000 * 60 * 5, // 5 mins // stop to refetch unnecessarily
    cacheTime: 1000 * 60 * 30, // 30 mins
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has ocdured: {error.message} </p>;

  return (
    <>
      {data?.genres &&
        data.genres.map((genre) => (
          <Button
            key={genre.id}
            variant="outline-dark"
            size="sm"
            className="m-1 rounded-pill"
            onClick={()=>getGenreId(genre.id)}
          >
            {genre.name}
          </Button>
        ))}
    </>
  );
};

export default GenresButtons;
