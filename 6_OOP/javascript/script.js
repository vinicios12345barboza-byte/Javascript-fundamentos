// 1 - métodos
const animal = {
    nome: "Zuk",
    latir(){
        console.log("AUUU")
    }
}
console.log(animal.nome)
animal.latir(); 

// 2 - mais sobre métodos
const pessoa ={
    nome: "Vinicios",

    getNome(){
        return this.nome
    },

    setNome(novoNome) {
        this.nome = novoNome
    }
}
console.log(pessoa.nome)
console.log(pessoa.getNome())
pessoa.setNome("Sarah")
console.log(pessoa.getNome())

const carro = {
    marca: "Civic",
    ano: 2012,

    getInfos: function(){
      return `${this.marca} - ${this.ano}`
    },

    setCar(novaMarca){
        this.marca = novaMarca
    }
}
console.log(carro.getInfos())
carro.setCar("Hb20")
console.log(carro.getInfos())

// 3 - prototype
/*
const text = "asd"
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(Object.getPrototypeOf(arr))
*/

 
const pessoa2 ={
    falar(){
        console.log("Oi")
    }, 
    arrotar(){
        console.log("URRRRRR")
    }
}

const aluno ={
    nome: "Vinxcios"
}

Object.setPrototypeOf(aluno, pessoa2)
aluno.falar()

// 4 - mais sobre prototype 
const myObject = {
    a: "b"
}
console.log(Object.getPrototypeOf(myObject))
console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const myObject2 = Object.create(myObject)
console.log(myObject2)
console.log(myObject2.a)

// 5 - classes básicas
const cachorro = {
    raca: null,
    nascimento: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

pastorAlemao.nascimento = 2026

console.log(pastorAlemao)

const pitBull = Object.create(cachorro)

pitBull.raca = "PitBull"
pitBull.nascimento = 2023
console.log(pitBull)

console.log(pitBull.patas)


const carroo ={
    modelo: null,
    ano: null,
    cor: 2026
}

const creta = Object.create(carroo)
creta.modelo = "Creta"
creta.cor = "Preto"
creta.ano = 2018
console.log(creta)

const Civic = Object.create(carroo)
Civic.modelo = "Civic"
Civic.ano = 2022
Civic.cor = "Branco"
console.log(Civic)

// 6 - função como classe - função construtora
const criarCachorro = (nome, raca) =>{
    const cachorro = {}

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Caramelo")
console.log(bob)

const criarCarro = (modelo, ano, cor) =>{
    return {
    modelo,
    ano,
    cor,

    getInfos(){
        return `${this.modelo} - ${this.ano} - ${this.cor}`
    }
}
}
const ix35 = criarCarro("IX35", 2019, "Preto")
console.log(`Seu carro é: ${ix35.getInfos()}`)

const meuCarro = (modelo, ano, cor, costumizado) =>{
    return{
        modelo,
        ano,
        cor,
        costumizado, 

        getIn(){
            return `Parábens, seu carro é o: ${this.modelo}, do ano: ${this.ano} e da cor: ${this.cor}.`
        }
    }

}
const hb20 = meuCarro("HB20", 2016, "preto", true )
console.log(`${hb20.getIn()}`)


// 7 - funções como classe
function Carro(modelo, ano){
    this.modelo = modelo
    this.ano = ano
}

const Tracker = new Carro("SUV", 2026)
console.log(Tracker)

// 8 -
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20