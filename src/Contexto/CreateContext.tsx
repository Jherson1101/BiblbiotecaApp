import { createContext, useContext, useEffect, useState } from "react";
import { alumnos } from "../assets/helpers/data"
import type { Ivotaciones } from "../assets/helpers/data"

interface Contexot {
  estadoAlumnos: Ivotaciones[],
  ActualizarMisdatos: (item: Ivotaciones) => void

}


export const contextoGloba = createContext<Contexot>({} as Contexot)
interface ChildrenDetalle {
  children: React.ReactNode
}
const CreateContextodo = ({ children }: ChildrenDetalle) => {
  const [estadoAlumnos, setestado] = useState<Ivotaciones[]>(alumnos)


  const ActualizarMisdatos = (item: Ivotaciones) => {    

    const UpdateEstado = [...estadoAlumnos,estadoAlumnos.map((alu, index) => {
      alu.dni === item.dni
        ? { ...alu, voto: item.voto =  1}
        : alu
    }) ]

  setestado(UpdateEstado)
  
  
  
  } 



  return (
    <contextoGloba.Provider value={{
      estadoAlumnos: estadoAlumnos,
      ActualizarMisdatos: ActualizarMisdatos
    }}>
      {
        children
      }

    </contextoGloba.Provider>
  )
}

export default CreateContextodo



