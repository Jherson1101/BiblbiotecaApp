

let valoresRepetidos = ['yamir', 'yair', 'hair']

export class Dominio {

    publico!: string
    name!: string
    email!: string

    constructor(publico: string, name: string, email: string) {

        this.publico = publico,
            this.name = name
        this.email = email

    }

    getpublic() {
        return this.publico

    }
    getname() {
        return this.name
    }
    getemail() {
        return this.email
    }
    setpublico(publico: string) {
        if (publico.length === 0) throw new Error("publico no puede ser vacio  ");
        this.publico = publico
    }
    setName(name: string) {
        if (valoresRepetidos.includes(name)) throw new Error("El valor no puede estar en la lista ");
        this.name = name

    }
    setEmail() {

    }


}
