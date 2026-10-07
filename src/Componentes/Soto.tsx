import React, { useEffect, useReducer, useRef, useState } from 'react'
interface Props {
    name: string
    lastname: string
}
const FormNames: Props = { lastname: 'yamir', name: 'mogollon' }
const Soto = () => {
    const [Error, setError] = useState<Props>({} as Props)
    const [ChangueValue, setChanugevalue] = useState(false)
    const handelChanugeColor = () => {
        setChanugevalue(!ChangueValue)
        console.log('Click Me details')
    }
    const htmidiv = useRef<HTMLDivElement>(null)
    useEffect(() => {
    }, [])
    const datosProyect = (): Promise<Props> => {

        return Promise.resolve({
            lastname: FormNames.name,
            name: FormNames.lastname
        })
    }
    const handelChanuge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError({
            ...Error,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = async () => {
        if (htmidiv.current?.classList) {
            htmidiv.current.classList.add("bg-red-500");
            console.log("obtener los datos entradnos ")
        } else {
            console.log("mogollon osorio ")
        }
    }
    return (
        <>
            <input className=''></input>
            <input></input>
            <button
                onClick={handelChanugeColor}
                className={` P-2 m-2 ${ChangueValue ? "bg-gray-600 " : "bg-red-600"}  p-2 text-white rounded-sm hover:bg-gray-800`}>ChangueColor</button>
            <div className={` P-2 m-2 ${ChangueValue ? "bg-gray-600 " : "bg-red-600"}  p-2 text-white rounded-sm hover:bg-gray-800`} ref={htmidiv}>
                <h1>Hola mudno</h1>
            </div>
        </>
    )
}

export default Soto