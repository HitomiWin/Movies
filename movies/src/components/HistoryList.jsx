import React from "react";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { getMovie } from "../services/TMDBApi";
import MovieCard from "./MovieCard";

const HistoryList = ({movie}) => {
  const { data, isLoading, isError, error } = useQuery(
    ["saved-movie", movie.id],
    () => getMovie(movie.id)
  );
  if (isLoading)
    return <Spinner className="text-center" animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );
  return (
    data && (
      <>
          <MovieCard movie={data} /> 


      </>
    )
  );
};

export default HistoryList;
