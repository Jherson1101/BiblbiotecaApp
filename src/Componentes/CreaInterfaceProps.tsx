import React from 'react'

interface Props_detalle {
    name: string,
    lastname: string
}
interface PropsDetalleDeveloper {
    crateuser: (usuario: Props_detalle) => void
}

const CreaInterfaceProps = ({   crateuser }   : PropsDetalleDeveloper) => {
    return (  
        <div>

                <div>CreaInterfaceProps</div>   
                <button  >Ir </button>
        </div>
    
    )
}

export default CreaInterfaceProps