import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import google from "./assets/google.png"
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardAction, CardContent, CardFooter, CardHeader } from "./components/ui/card"
import { CardDemo } from './Componentes/Card'
import type { TypesLibros } from "./data.ts"
import { libros } from "./data.ts"  
import { contextoGloba } from './Contexto/CreateContext.tsx'   
import useContexto from './Contexto/useContexto.tsx'

function App() {    
    const   { estado }   =  useContexto()
   const [Libro, setLibro] = useState<TypesLibros[]>([])
  const [input, setinput] = useState('')

  const handleChanuge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinput(e.target.value)
  }
  const filterBooks = libros.length > 0 ?
    Libro.filter((item, index) => item.titulo.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    : Libro
  useEffect(() => {
    setLibro(libros)  
    console.log( import.meta.env.HTTS)
  }, [])

  return (
    <>
    <h1> {  estado}</h1>

{/* <img src={MenuItem?.img}></img> */}
      <div className='bg-black'>
        <h1 className='text-2xl font-bold mx-2 text-white p-3'>Biblioteca App  VSX</h1>
      </div>
      <div className='border min-h-full h-screen '>
        <div className='container  mx-auto mt-2 p-1 '>
          <Input onChange={handleChanuge} className='p-2 mt-3' placeholder='buscar   Libro' ></Input>
          <Button className='mt-2 w-[99vw] lg:w-[200px] cursor-pointer'> Buscar</Button>
        </div>
        <hr></hr>
        <div className=' mt-4 grid grid-cols-[250px_1fr] w-[90vw] mx-auto gap-3.5'>
          <div className='border rounded-md shadow-2xl bg-gray-50 '>
            <p className='mx-2'>filtro</p>
          </div  >
          <div className='grid   grid-cols-1    md:grid-cols-3  lg:grid-col-3 gap-5'>
            {
              filterBooks.length === 0 ? <h1 className='font-bold'>Sin Resultados</h1> :
                filterBooks.map((item, index) => (
                  <CardDemo item={item}> </CardDemo>
                ))
            }
          </div>

        </div>
      </div>

    </>
  )

}
export default App
