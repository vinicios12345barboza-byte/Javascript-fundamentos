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


function verificarIdade(age){

    if(age <= 16){
        throw new Error("Não pode votar")
    }

    return "Pode votar"
}

try{
    const idade = verificarIdade(23)
    console.log(idade)
} catch(erro){
    console.log(`ixe, erro: ${erro.message}`)
}

function fritarBife(){
    return new Promise((resolve, reject) =>{
        if(fritarBife){
            resolve("Fritando")
        } else{
            reject("Algo deu errado no seu bife")
        }
    })
}

async function prepararAlmoco() {
    try{
        const almocar = await fritarBife()
        console.log(`O pedido está ${almocar}`)
    } catch(erro){
        console.log(`Ops.. ${erro.message}`)
    }
}
prepararAlmoco()

// // 1
// const a = document.querySelector("#meu-link")
// a.href= "https://youtube.com"
// a.innerText = "Ir para youtube"
// a.style.backgroundColor = "orange"

// // 2
// const meuForm = document.querySelector("#meu-form")
// meuForm.addEventListener("submit", (e) =>{
//     e.preventDefault()
//     console.log("Dados salvos em segundo plano!")
// })

// // 3
// const campoName = document.querySelector("#campo-nome")
// if(campoName){
//     campoName.addEventListener("keydown", (e) =>{
//         if(e.key === "Enter"){
//             console.log("Usuario")
//         }   
//         })
//     campoName.addEventListener("focus", (e) =>{
//         e.target.style.backgroundColor = "lightgreen"
//         console.log("Usuário entrou!")
//     })

//     campoName.addEventListener("blur", (e)=>{
//         e.target.style.backgroundColor = ""
//         console.log("Usuário saiu!") 
//     })
// }
// let timer

// window.addEventListener("scroll", () =>{
//     clearTimeout(timer)

//     timer = setTimeout(() =>{
//         console.log("Usuário parou de rolar a página!")
//     }, 700)
// } )


function checkNumber(n){
    return new Promise((resolve, reject) =>{
        if(n > 10){
          resolve(`${n}`)
        } else{
         reject(new Error(`Algo deu errado`))
        }
    })
}

const chekcCerto = checkNumber(20)
const chekcErro = checkNumber(32)

async function checkNumberYes() {
    try{
        const certo1 = await checkNumber(20)
        console.log(`Sucesso, número ${certo1} válido`)

        const certo2 = await checkNumber(32)
        console.log(`Sucesso támbem! ${certo2} válido`)
    } catch(error){
        console.log(`ih, erro: ${error}`)
    }
}

checkNumberYes()