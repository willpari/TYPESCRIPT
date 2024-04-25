let mensaje: string = "Yahallo Hikki"

mensaje = "Hikki Daisuki"

mensaje = "Bye Bye Hikki"

console.log(mensaje)
console.log(typeof [])

/**
 * Tipos de JS
 * 
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * Tipos de TS
 * any 
 * unknwon
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos Inferidos
 * **/

let fansOregairu = 7_000_000
let personajeFavorito = "Yui Yuigahama"
let fans = true

function yukinoHappy(config: any) {
    return config
}

let waifus: string[] = ['Yui', 'yukino', 'saki']

let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x => x.) // el autocompletado sugiere metodos del tipo de dato

let tupla: [number, string[]] = [1, ['Gahamama', 'Yukimama']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase
//enum Talla { Chica, Mediana, Grande, ExtraGrande }  //(Predeterminada)//

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' } 

const variable1 = Talla.Grande

console.log(variable1)

const enum LoadingState { Idle, Loading, Succes, Error }

const estado = LoadingState.Succes

type Direccion ={
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion,

}

const objeto: Persona = { 
    id: 1, 
    nombre: 'Yahallo Hikki-Kun', 
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Chiba',
        pais: 'Japon'
    }
}

const arr: Persona[] = []

