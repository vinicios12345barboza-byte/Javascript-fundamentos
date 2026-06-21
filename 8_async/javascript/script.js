// 1 - setTimeout
// console.log("Ainda não executou")

// setTimeout(() =>{

//     console.log("Requisição assíncrono!")

// }, 2000)

// console.log("Ainda não executou 2")

// setTimeout(tocarAlarme = () => {
//         console.log("TRIMMMMM! ALARME")
// }, 2000);



// 2 - setInterval
// console.log("Ainda não começou!")

// setInterval(() =>{
//     console.log("Intervalo assíncrono")
// }, 3000)

// console.log("Ainda não começou! 2")

// let contador = 0

// const meuCronometro = setInterval(() =>{
//     contador++
//     console.log(`Segundos: ${contador}`)

//     if(contador === 7){
//         clearInterval(meuCronometro)
//         console.log("FIM! Cronômetro parado!")
//     }
// }, 1000)

// console.log("Daqui 23 segundos, reunião")
// let contar = 0
// const meuAlarme = setInterval(() =>{
//     contar++
//     console.log(`quantos segundos: ${contar}`)

//     if(contar === 23){
//         clearInterval(meuAlarme)
//         console.log("Reunião")
//     }
// }, 1000)

// setInterval(() =>{
//     console.log(new Date())
// }, 1000)


// 3 - promises
// const promessa = Promise.resolve(5 + 5)
// console.log("SLA")

// promessa.then(value => {
//     console.log(`A soma é: ${value}`)
//     return value
// })
// .then((value) => value - 1)
// .then((value) => console.log(`Agora é: ${value}`))

// console.log("SLA2")

// const buscarDadosNoServidor = new Promise((resolve, reject) =>{
//     let deuBom = true

//     if(deuBom){
//         resolve("Vinicios")
//     } else{
//         reject("Erro ao conectar no banco")
//     }
// });

// buscarDadosNoServidor.then((nome) =>{
//     console.log(`Usuário encontrado: ${nome}`)
//     return nome.toUpperCase()
// })
// .then((nomeMaiusculo) =>{

//     console.log(`NOME GRITANDO: ${nomeMaiusculo}`)
// })

// 4 - falha na promise (.catch()) 
// Promise.resolve(4 * "asf")
// .then(n =>{
//     if(Number.isNaN(n)){
//         throw new Error("Valores inválidos")
//     }
// })
// .catch(err => console.log(`Um erro ocorreu: ${err}`))

// 5 - rejeição de promise
function checkNumber(n){
    return new Promise((resolve, reject) =>{
        if(n > 10){
            resolve(`O número é maior que 10!`)
        } else{
            reject(new Error("Número muito baixo!"))
        }


    })
}
const a = checkNumber(20)
const b = checkNumber(2)
a.then(v => console.log(`O resultado é ${v}`)).catch(err => console.log(`Um erro: ${err}`))
b.then(v => console.log(`O resultado é ${v}`)).catch(err => console.log(`Um erro: ${err}`))

const maiorIdade = new Promise((resolve, reject) =>{
    const idade = 35

    if(idade >= 18 ){
        resolve(`Pode entrar, você tem: ${idade}`)
    } else{
        reject("Não pode entrar!")
    }
})

maiorIdade
.then(age => console.log(`OK: ${age}`))
.catch(erro => console.log(`ERRO: ${erro}`))



// 6 - resolvendo várias promises
const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) =>{
    if(30 > 10){
        resolve(30)
    } else{
        reject("Erro")
    }
})

Promise.all([p1, p2, p3])



// 7 - 
// 8 - 
// 9 - 