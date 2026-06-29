const fazerEntrega = new Promise((resolve, reject) => {
    let motoquerioChegou = true

    if(motoquerioChegou){
        resolve("Chegou quentinho")
    } else{
        reject("Motoboy sumiu!")
    }
});

fazerEntrega
.then(lanche => console.log(`Sucesso ${lanche}`))
.catch(erro => console.log(`Erro: ${erro}`))

function fazerEntrega2(){
    return new Promise((resolve, reject) =>{
          let motoca = true
        if(motoca){
            resolve("CHegou")
        } else{
            reject("Errado")
        }
    })
}


async function motocaChegou() {
    try{
        const chegou = await fazerEntrega2()
        console.log(`O pedido: ${chegou}`)
    } catch (erro){
        console.log(`Ih, deu ruim. Pedido: ${erro}`)
    }
}
motocaChegou()

console.log("Reunião daqui 10s")

let contador = 0

 const alarme = setInterval(() =>{
    contador++
    console.log(`Segundos: ${contador}`)
   if(contador === 10){
    clearInterval(alarme)
    console.log("Hora da reunião")
}
}, 1000)


Promise.resolve(4 * "asd")
.then(n =>{
    if(Number.isNaN(n)){
        throw new Error("Valores inválidos")
    }
})   
.catch(err => console.log(`Um erro ocorreu: ${err}`));


const checkNumber = (n) =>{
    return new Promise((resolve, reject) =>{

        if(n > 10){
            resolve(`${n}`)
        } else{
            reject(new Error("Muito baixo"))
        }
    })
}

const resolveCheck = checkNumber(20)
const rejectCheck = checkNumber(2)

async function checkNumberYes() {
    try{
    const sla =  await checkNumber(20)
    console.log(`Sucesso, número ${sla} válido.`)

    const sla2 = await checkNumber(2)
    console.log(`Sucesso támbem! ${sla2} válido.`)
    }catch(erro){
        console.log(`Ops, erro: ${erro}`)
    }
}

checkNumberYes()