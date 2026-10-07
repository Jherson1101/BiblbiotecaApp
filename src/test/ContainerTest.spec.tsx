import { describe, afterEach, test, vi, expect, } from "vitest"
import { cleanup, fireEvent, render } from "@testing-library/react"
import { FunctionFecth } from "../Componentes/ApiFeching"
let uriPruebas = 'https://jsonplaceholder.typicode.com/users/1'
let uriodedatosTos =
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

let mockindDato = vi.fn()
afterEach(() => {

    cleanup()
})
describe('validar la funcion de api Rest', () => {
    test('valicion de feching dFaYahoe datos ', async () => {
        let spy = vi.spyOn(globalThis, 'fetch').mockResolvedValue({

            ok: true,
            status: 200,
            json: async () => uriodedatosTos
        } as Response)

        let datos = await FunctionFecth()
        expect(spy).toHaveBeenCalledWith(uriPruebas)
        expect(spy).toHaveBeenCalledTimes(1)
        expect(datos).toEqual(uriodedatosTos)
    })

    test('valaicon del container Test  pero la situcion mala', async () => {
        let spyonValidi = vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error("rejected promise"))
       await  expect(FunctionFecth()).rejects.toThrow('Error en la peticion')
        expect(spyonValidi).toHaveBeenCalled()


    })
})