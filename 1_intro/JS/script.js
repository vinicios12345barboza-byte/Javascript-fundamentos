console.log(Number("123"))
console.log(Number("123z"))
console.log(Number(true))
console.log(Number(false))

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean("Hello"))
console.log(Boolean(""))


function jogo(numero){
    
    const segredo = 7

    if(numero < segredo){
        console.log("É maior")
    } 
    
    else if(numero > segredo){
        console.log("É menor")
    } 
    
    else{
        console.log("Acertou!")
    }
}

jogo(8)

class Produto{
    constructor(nome, precoOrg){
        this._nome = nome
        this._preco = precoOrg
    }

    get precoFormatado(){
        return `${this._nome} do valor: ${this._preco.toFixed(2)}`
    }

    set atualizarPreco(novoPreco){
        if(novoPreco > 0){
            this._preco = novoPreco
        } else{
            console.log("ERRO: Preço Inválido!")
        }
    }
}

const camisa = new Produto("Camisa Barça", 350)
console.log(camisa.precoFormatado)
camisa.atualizarPreco = 279.99
console.log(camisa.precoFormatado)

const xbox = new Produto("XBOX X", 3500)
console.log(xbox.precoFormatado)
xbox.atualizarPreco = 3000
console.log(xbox.precoFormatado)

const carro = new Produto("BMW", 150000)
console.log(carro.precoFormatado)
carro.atualizarPreco = 130000
console.log(carro.precoFormatado)