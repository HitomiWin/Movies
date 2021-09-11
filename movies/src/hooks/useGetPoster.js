const useGetPoster = (path="") => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${path}`
  return posterUrl 
}

export default useGetPoster