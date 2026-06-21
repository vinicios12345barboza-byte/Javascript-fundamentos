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

const buscarUsuario = new Promise ((resolve, reject) => {

        if(id === 1){
            resolve("Vinicius")
        } else {
            reject("Usuário não encontrado")
        }

    })





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
