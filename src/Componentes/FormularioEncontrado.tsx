import React, { useEffect, useRef, useState } from 'react'
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { alumnos } from '../assets/helpers/data'


interface PropsFrom {
    dni: string,
    nombre: string
}


interface PropsFunciton {

    resetearform: Boolean
    PapersDetalle: (item: any) => void

}

const initalStado: PropsFrom = {
    dni: '',
    nombre: ''
}


const FormularioEncontrado = ({ PapersDetalle
    , resetearform }: PropsFunciton) => {
    const [dni, setdni] = useState<PropsFrom>(initalStado)

    const FormluarioEfecto = useRef<HTMLFormElement>(null)


    const handleChangue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value)
    }


    const ResetearFormulario = () => {
        FormluarioEfecto.current?.reset()
        setdni(initalStado)

    }


    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {

        let datos = alumnos.find((item, index) => item.dni === dni.dni)
        console.log(datos)
        if (datos != undefined) {
            setdni({
                ...dni,
                nombre: datos?.nombre!.concat(' ' + datos.apellido_materno!).concat(' ' + datos.apellido_paterno)
            })

            PapersDetalle(datos)
        } else {
            setdni({
                ...dni,
                nombre: 'usuario no encontrado'
            })
        }
    }
    const handleChanugeButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        setdni({
            ...dni,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        let nuevos_datos = alumnos.map((item, index) => {
            return {
                ...item, voto: 0
            }
        })
    }, [])

    useEffect(()=>{
        ResetearFormulario()
        

    },   [resetearform])
    return (
        <>
            <div className='w-sm   my-10 lg:mb-0  lg:w-lg mx-auto' >
                <form ref={FormluarioEfecto}>
                    <Label className='my-2'>DNI : </Label>
                    <Input maxLength={8} value={dni.dni} onBlur={handleBlur} onChange={handleChanugeButton} placeholder='DNI' name='dni' />
                    <Label className='my-2'>nombre : </Label>
                    <Input value={dni.nombre || ''} disabled />

                </form>

            </div>
        </>
    )
}

export default FormularioEncontrado