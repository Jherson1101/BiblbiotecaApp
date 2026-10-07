import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { libros } from '../data'
import type { TypesLibros } from "../data"

const SingleBook = () => {


    const { id } = useParams()
    const [SingleBook, setSingleBook] = useState<TypesLibros>({} as TypesLibros)

    let esperar = async () => {

        const encncontraod = libros.find((item, index) => item.titulo === id)
        if (!encncontraod) {
            console.log('no llega')
        } else {
            console.log(encncontraod)
        }
        setSingleBook(encncontraod!!)


    }
    useEffect(() => {
        esperar()
    }, [id])
    return (
        <div>
            <div className=' mt-5 h-screen gap-6 grid grid-cols-2 sm:w-sm md:w-md lg:w-[70%]    mx-auto'>

                <div className="box border relative rounded-md flex items-center  justify-center">  

                    <h1 className='absolute top-0 text-2xl mt-2'>{  SingleBook.titulo}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem aperiam quos reiciendis alias quam, dolore esse at voluptate
                        temporibus dolor voluptatibus unde accusamus possimus doloremque earum ab tempore assumenda.</p>
                </div>
                <div  style={{ 
      backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(https://images.cdn3.buscalibre.com/fit-in/360x360/f5/f2/f5f2e2edd647784f07b709f1fef82d1c.jpg)`
    

}} className="box border rounded-md">

                </div>



            </div>

        </div>
    )
}

export default SingleBook