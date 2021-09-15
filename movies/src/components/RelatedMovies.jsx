import React,{useEffect, useState} from "react";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import MovieCardList from "./MovieCardList";
import { getRelatedMovies } from "../services/TMDBApi";

const RelatedMovies = ({ genre, year }) => {
  const { movie_id } = useParams();

  const { data, isLoading, isError, error } = useQuery(
    ["related-movie", genre, year],
    () => getRelatedMovies(genre, year)
    );
    
  const [dataWithoutOwn, setDataWithoutOwn] =useState(data??null)
  useEffect(()=>{
    const results = data?.results.filter(
      (result) => result.id !== parseInt(movie_id)
    )
    setDataWithoutOwn({...data,results})
     // eslint-disable-next-line
  },[data])

  if (isLoading)
    return <Spinner className="text-center" animation="border" size="sm" />;

  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );
 console.log(dataWithoutOwn)
  return(
    <>
    <h1>Recommendations</h1>
    {dataWithoutOwn &&
      <MovieCardList data={dataWithoutOwn} />
    }
    </>
  ) 
};

export default RelatedMovies;
