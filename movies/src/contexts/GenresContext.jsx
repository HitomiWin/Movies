import React,{createContext,useContext, useState} from 'react'

const GenresContext= createContext()

export const useGenresContext = ()=>{
  return useContext(GenresContext)
}

const GenresContextProvider = ({children}) => {

  const [genreId, setGenreId] = useState(null)
  const [genreName, setGenreName]= useState("")
  

  const getGenreId=(id)=>{
    setGenreId(id)
  }
  const getGenreName =(name)=>{
    setGenreName(name)
  }
 
  const values={genreId, getGenreId, genreName, getGenreName}
  return (
    <GenresContext.Provider value={values}>
      {children}      
    </GenresContext.Provider>
  )
}

export default GenresContextProvider
