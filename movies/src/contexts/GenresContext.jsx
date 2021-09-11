import React,{createContext,useContext, useState} from 'react'

const GenresContext= createContext()

export const useGenresContext = ()=>{
  return useContext(GenresContext)
}

const GenresContextProvider = ({children}) => {
  const [genreId, setGenreId] = useState(28)

  const getGenreId=(id)=>{
    setGenreId(id)
  }
 
  const values={genreId, getGenreId}
  return (
    <GenresContext.Provider value={values}>
      {children}      
    </GenresContext.Provider>
  )
}

export default GenresContextProvider
