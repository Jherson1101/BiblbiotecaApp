export const FunctionFecth = async () => {

    try {
        let datosComp = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if (datosComp.ok != true) {
            throw new Error('error en la peticion')
        }
        let datos = await datosComp.json()
        return datos
    } catch (error) {

        throw new Error("Error en la peticion");
    }
}