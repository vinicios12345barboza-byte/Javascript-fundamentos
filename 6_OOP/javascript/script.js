// 1 - métodos
// const animal = {
//     nome: "Zuk",
//     latir(){
//         console.log("AUUU")
//     }
// }
// console.log(animal.nome)
// animal.latir(); 

// const car = {
//     marca: "Hyundai",
//     buzinar(){
//         console.log("BII")
//     }
// }

// console.log(car.marca)
// car.buzinar()

// // 2 - mais sobre métodos ES5
// const pessoa ={
//     nome: "Vinicios",

//     getNome(){
//         return this.nome
//     },

//     setNome(novoNome) {
//         this.nome = novoNome
//     }
// }
// console.log(pessoa.nome)
// console.log(pessoa.getNome())
// pessoa.setNome("Sarah")
// console.log(pessoa.getNome())

// // usar no ES6
// const pessoa3 ={
//     _nome: "Vinicios",

//     get nome(){
//         return this._nome;
//     },

//     set nomeNovo(novoName){
//         this._nome = novoName
//     }
// };

// console.log(pessoa3.nome)
// pessoa3.nomeNovo = "Sarah"
// console.log(pessoa3.nome)


// class Carro2 {
//     constructor(marca, ano){
//         this._marca = marca
//         this._ano = ano
//     }

//     get marca(){
//         return `${this._marca} do ano: ${this._ano}`
//     }

//     set config(novoModel){
//         this._marca = novoModel
//     }

//     andar(){
//         console.log(`O carro ${this._marca} está andando....`)
//     }
// }

// const RAM = new Carro2("DODGE RAM" , 2015)
// console.log(RAM.marca)
// RAM.andar()

// class Ca {
//     constructor(marca, ano){
//         this.marca = marca
//         this.ano = ano
//     }

//     get infos(){
//         return `${this.marca} - ${this.ano}`
//     }
// }

// const bwm = new Ca("BMW 320", 2023)
// console.log(bwm.infos)


// const carro = {
//     marca: "Civic",
//     ano: 2012,

//     get Infos(){
//       return `${this.marca} - ${this.ano}`
//     },

//     set Car(novaMarca){
//         this.marca = novaMarca
//     }
// }
// console.log(carro.Infos)
// carro.Car = "Golfe Sapão"
// console.log(carro.Infos)

// // 3 - prototype
// /*
// const text = "asd"
// console.log(Object.getPrototypeOf(text))

// const bool = true
// console.log(Object.getPrototypeOf(bool))

// const arr = []
// console.log(Object.getPrototypeOf(arr))
// */

 
// const pessoa2 ={
//     falar(){
//         console.log("Oi")
//     }, 
//     arrotar(){
//         console.log("URRRRRR")
//     }
// }

// const aluno ={
//     nome: "Vinxcios"
// }

// Object.setPrototypeOf(aluno, pessoa2)
// aluno.falar()

// // 4 - mais sobre prototype 
// const myObject = {
//     a: "b"
// }
// console.log(Object.getPrototypeOf(myObject))
// console.log(Object.getPrototypeOf(myObject) === Object.prototype)

// const myObject2 = Object.create(myObject)
// console.log(myObject2)
// console.log(myObject2.a)

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

class Auau {
    constructor(raca, nascimento){
        this._raca = raca
        this._nasc = nascimento
        this.patas = 4
    }

    get infos(){
        return `O cachorro da raça ${this._raca} nasceu em: ${this._nasc}`
    }
}

const pastorAlemaoo = new Auau("Pastor Alemanhã", 2023)
console.log(pastorAlemaoo.infos)
console.log(pastorAlemaoo.patas)

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


class Carr {
    constructor(modelo, ano, cor){
        this._modelo = modelo
        this._ano = ano
        this._cor = cor
    }

    get infor(){
        return `O carro do modelo: ${this._modelo} do ano: ${this._ano}.`
    }

    set novoCarro(novoModelo){
        this._modelo = novoModelo
    }
}

const Ferrari = new Carr("Ferrari 458", 2015)
console.log(Ferrari.infor)
Ferrari.novoCarro = "Lambo"
console.log(Ferrari.infor)


// 6 - função como classe - função construtora
const criarCachorro = (nome, raca) =>{
    const cachorro = {}

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Caramelo")
console.log(bob)

class criarDog{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }

    get dogInfo(){
        return `${this.nome} - ${this.raca}`
    }

    set dogNovo(novaRaca){
        this.raca = novaRaca
    }
}

const baby = new criarDog("Baby", "Vira lata vagabundo")
console.log(baby.dogInfo)
baby.dogNovo = "Hotwille"
console.log(baby.dogInfo)

class CarroBase {
    constructor(modelo, ano, cor){
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    } 
  
    get info(){
        return `${this.modelo} - ${this.ano} - ${this.cor}`
    }
}

class CarroCustomizado extends CarroBase{
     constructor(modelo, ano, cor, costumizado){
        super(modelo, ano, cor, costumizado)
        this.costumizado = costumizado
     }

        get in(){
            return `Parábens, seu carro é o: ${this.modelo}, do ano: ${this.ano} e da cor: ${this.cor}.`
        }
}
const hb20 = new CarroBase("HB20", 2019, "Cinza")
const cretinha = new CarroCustomizado("CRETA", 2026, "Preto", true)
console.log(`Seu carro é: ${hb20.info}`)
console.log(`${cretinha.in}`)


// 7 - funções como classe
function Carro(modelo, ano){
    this.modelo = modelo
    this.ano = ano
}

const Tracker = new Carro("SUV", 2026)
console.log(Tracker)

// 8 - métodos na funcao construtora
Carro.prototype.buzinar =function (){
    console.log("bi")
}
Tracker.buzinar()

//ES6
// class Carro{
//     constructor(modelo, ano) {
//         this.modelo = modelo;
//         this.ano = ano;
//     }

//     // O método entra aqui direto, sem digitar a palavra "prototype"
//     buzinar() {
//         console.log("bi");
//     }
// }

// const Tracker = new Carro("SUV", 2026);
// Tracker.buzinar();

function MotoEs5(modelo, ano){
    this.modelo = modelo
    this.ano = ano 
}

const XRE300 = new MotoEs5("XRE 300", 2023)
console.log(XRE300)

class Moto{
    constructor(modelo, ano){
        this.modelo = modelo
        this.ano = ano
    }

    get infoMoto(){
        return `A moto do modelo: ${this.modelo} e do ano: ${this.ano} vendida!`
    }

    set trocarModel(trocaModel){
        this.modelo = trocaModel
    }
}

const XJ6 = new Moto("XJ6", 2018)
console.log(XJ6.infoMoto)
XJ6.trocarModel = "NINJA 300"
console.log(XJ6.infoMoto)


// 9 - Classes ES6
class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}
const jeff = new CachorroClasse("Jeff", "Labrador")
console.log(jeff)

// 10 - Mais sobre Class
class Caminhão {
    constructor(eixos,cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhão(){
        console.log(`Este caminhão tem: ${this.eixos} eixos e é da cor: ${this.cor}`)
    }
}
const scania = new Caminhão(6, "Preto")
console.log(scania)
scania.descreverCaminhão()


// 11 - override
class Humano{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    descreverHumano(){
        return `Olá, meu nome é ${this.nome}. E eu tenho ${this.idade} anos.`
    }


}

const vinicios = new Humano("Vinicios", 19)
console.log(vinicios)
console.log(vinicios.descreverHumano())

Humano.prototype.idade = "Não definida"
console.log(vinicios.idade)
console.log(Humano.prototype.idade)

// 12 - Symbols em class
class Aviao  {
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()
Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)
console.log(boeing)
console.log(boeing[asas])
console.log(boeing[pilotos])


// 13 - Getters e Setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Você está lendo ${this.titulo}.`
    }

    set adicionarTags(tag){
        const tagsArrays = tag.split(", ")
        this.tags = tagsArrays
    }


}

const myPost = new Post("Primeiro post", "Meu primeiro post");
console.log(myPost)
console.log(myPost.exibirTitulo)
myPost.adicionarTags = "programação, javascript, js"
console.log(myPost)

// 14 - herança
class User{
    constructor(nome, email){
        this.nome= nome
        this.email = email
    }

    saudar(){
        return `Hello, my name is ${this.nome}`
    }
}

class Admin extends User{
    constructor(nome, email, nivelAcesso){
        super(nome, email)
        this._nivelAcesso = nivelAcesso
    }

    get nivelAcesso(){
        return this._nivelAcesso
    }

    set nivelAcesso(novoNivel){
        if(novoNivel < 3){
            console.log(`Erro: O nível ${novoNivel} é baixo demais!`)
        } else{
            console.log(`Nível atualizado para ${novoNivel}.`)
            this._nivelAcesso = novoNivel
        }
    }
}


const viniciosAdmin = new Admin("Vinicios", "V@gmail.com", 5)
console.log(`Nível inicial: ${viniciosAdmin.nivelAcesso}`) 

viniciosAdmin.nivelAcesso = 1 
console.log(`Nível atual: ${viniciosAdmin.nivelAcesso}`)

viniciosAdmin.nivelAcesso = 4 
console.log(`Nível atual: ${viniciosAdmin.nivelAcesso}`)

console.log(viniciosAdmin)

// 15 - instanceof
console.log(viniciosAdmin instanceof Admin)
console.log(Admin instanceof User)
