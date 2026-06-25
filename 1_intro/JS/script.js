class Veiculo {
    constructor(marca,  modelo){
        this.marca = marca
        this.modelo = modelo
    }
}

class Moto extends Veiculo{
    constructor(marca, modelo, cilindrada){
        super(marca, modelo)
        this._cilindrada = cilindrada
    }

    get infos(){
        return `A sua moto da marca: ${this.marca}, do modelo: ${this.modelo} tem essa quantia de cilindradas: ${this._cilindrada}`
    }

    set cilindrada(cl){
        
        if(cl <= 0){
            console.log(`Erro: ${cl} é inválido`)
        } else{
            this._cilindrada = cl
        }
    }
}

const honda = new Moto("Honda", "XRE", "300")
console.log(honda.infos)
honda.cilindrada = 0


function verificarVoto(age){

    if(age <= 16){
        throw new Error("Muito jovem para votar!")
    }

    return "Pode votar"
}

try{
    const idade = verificarVoto(24)
    console.log(idade)
}catch(error){
    console.log(`Sistema bloqueado: ${error.message}`)
}

verificarVoto()

function fritarBife(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Bife no ponto!")
        }, 2000);
    })
}

async function preparaAlmoco() {
    const almoco = await fritarBife()
    console.log(almoco)
}
preparaAlmoco()