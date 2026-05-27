// 1 - métodos
const animal = {
    nome: "Zuk",
    latir: function(){
        console.log("AUUU")
    }
}
console.log(animal.nome)
animal.latir(); 

// 2 - mais sobre métodos
const pessoa ={
    nome: "Vinicios",

    getNome: function(){
        return this.nome
    },

    setNome: function (novoNome) {
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
    } 
}
console.log(carro.getInfos())

// 3 - prototype
const text = "asd"
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(Object.getPrototypeOf(arr))

const pessoa2 ={
    falar(){
        console.log("Oi")
    }, 
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
    nascimento: null
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
pastorAlemao.nascimento = 2026
console.log(pastorAlemao)
const pitBull = Object.create(cachorro)
pitBull.raca = "PitBull"
console.log(pitBull)


const carroo ={
    modelo: null,
    ano: null,
    cor: null
}

const creta = Object.create(carroo)
creta.modelo = "Creta"
creta.cor = "Preto"
creta.ano = 2018
console.log(creta)

// 6
// 7
// 8
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