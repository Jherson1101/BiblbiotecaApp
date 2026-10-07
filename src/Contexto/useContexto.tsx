import React, { createContext, useContext } from 'react'
import { contextoGloba } from './CreateContext'
const useContexto = () => {   
    const  {  estadoAlumnos  , ActualizarMisdatos}   =  useContext( contextoGloba )
  return {
        estadoAlumnos ,  
        ActualizarMisdatos
  }
}



export default useContexto