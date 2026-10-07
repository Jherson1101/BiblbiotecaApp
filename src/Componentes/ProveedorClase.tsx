import React, { useState } from 'react'
import { Dominio } from '../Dominio/User'
import { Button } from '@base-ui/react'
type domino = Dominio



const ProveedorClase = () => {
    const [Formulario, setFormulario] = useState<domino>({} as domino)
    const handleClickme = async () => {
        let domino = new Dominio(Formulario.getname(),
            Formulario.getpublic(), Formulario.getemail())

        try {

            let datos = await fetch('ddgf', {
                method: "POST",
                body: JSON.stringify(domino)
            })
            let Replor = await datos.json()
            console.log(Replor)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>

            <form onSubmit={handleClickme}>
                <input name='publico' className='p-2' ></input>
                <input name='publico' className='p-2' ></input>
                <input name='publico' className='p-2' ></input>
                <Button type='button' >Click</Button>

            </form>

        </>
    )
}

export default ProveedorClase