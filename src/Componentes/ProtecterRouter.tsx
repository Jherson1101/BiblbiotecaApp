import React, { type ReactNode, useEffect } from 'react'
import { replace, useNavigate } from "react-router-dom"
export interface Props {
  children: ReactNode
} 

const ProtecterRouter = ({ children }: Props): any => {
  const token = localStorage.getItem('token')
  const navigate =  useNavigate()  
  useEffect(()=>{
      if ( !token) {
         const timer =  setTimeout(() => {
                  navigate("/" )
                      
         }, 2000);
          return  () => clearTimeout( timer)
      }

  } , [token , navigate])  
    
  if ( !token) {
    return <h1>Pagian Prohibida seras Redirigido</h1>
  }
  return <>{children}</>

  


}

export default ProtecterRouter
  