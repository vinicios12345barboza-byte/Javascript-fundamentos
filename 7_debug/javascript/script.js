// 1 - strict
"use strict";

// opa = "Teste"
// const undefined = 10
// delete [].length
// function somar(n1, n1){}

const opa = "Teste"

// 2 - Método de debug : console.log
let a = 1
let b = 2

if(a == 1){
    a = b + 2
}

console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2
    console.log(a)
}

if(a > 5){
    a= 25
}

console.log(a)

// 3 - meétodos de debug: debugger
let c = 1
let d = 2

if(c == 1){
    c = d + 2
}

// debugger

for(let i = 0; i < d; i++){
    c = c + 2
}

let nome = "Vinicios"
let idade = 19

// debugger

idade = idade + 1
console.log(`Parábens ${nome}, você completou ${idade} anos!`)

// 4 - tratamento de dados
function checkNumber(n){
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor inválido!")
        return
    } 

    console.log("Valor correto!")
    return result
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("teste")


const cadastradarCpf = (cpfInformado) =>{
    const cpfLimpo = cpfInformado.replace(/\D/g, "");

    if(cpfLimpo.length !== 11){
        console.log("Erro! CPF INVÁLIDO! Digite 11 números corretamente.")
        return
    }

    console.log(`CPF ${cpfLimpo} tratado e salvo com sucesso no sistema!`)
}
cadastradarCpf("225.337.434-20")
cadastradarCpf("234434")



// 5 - Exceptions
let x = 10

if( x != 11 ){
    // throw new Error("O valor de X não pode ser diferente de 11!")
}

const cobrarCliente = (valor) =>{
    if(valor <= 0){
        // throw new Error("O valor precisa ser maior que 0!")
    }

    console.log(`Sucesso: R$ ${valor} cobrados do cliente.`)
}

cobrarCliente(50)
cobrarCliente(-10)


// 6 - Try Catch
// try{
//     const soma = x + y
// } catch(error){
//     console.log(`Erro no programa: ${error}`)
// }

const verificarIdade = (age) =>{
    if(age < 18 ){
        throw new Error("-18 não pode acessar nosso sistema!")
    }

    return `Acesso liberado, você tem ${age} anos.`
}

try{

    const resultado = verificarIdade(23)
    console.log(resultado)

} catch(error){

    console.log(`Ops, algo deu errado: ${error.message}`)
}

console.log("Sistema rodando perfeitamente aqui!")

// 7 - Finally
try{
    const value = checkNumber("2")

    if(!value){
        throw new Error("Valores inválidos")
    }
} catch(error){
    console.log(`Opa, aconteceu um problema: ${error}`)
} finally{
    console.log("O código foi executado!")
}

const abrirConexaoBancoDeDados = () =>{
    console.log("1. Abrindo conexão com o banco de dados.....")

    if(Math.random() > 0.5){
        throw new Error("Falha ao ler dados do servidor!")
    }

    console.log("2. Dados lidos com sucesso!")
}

try{
    abrirConexaoBancoDeDados();
} catch(error){
    console.log(`3. Tratanto o erro: ${error.message}`)
} finally{
    console.log("4. Fechando conexão com o banco para não gastar memória.")
}


// 8 - Assertions
function checkArray(arr){
    if(arr.length === 0 ){
        throw new Error("O array precisa ter elementos!")
    } else{
        console.log(`O array tem ${arr.length} elementos.`)
    }
}

// checkArray([])
checkArray([1,2 ,3])

const realizarLogin = (user, senha) => {
    console.assert(senha !== "", "BUG NO FRONT-END: Tentativa de login com senha vazia!")

    if(user === "vinicios" && senha === "v23"){
        return `Login feito com sucesso! Entrando no sistema... ${user}.`
    } else{
        return "Usuário ou senha incorretos!"
    }
}

const tentativa1 = realizarLogin("vinicios", "v23")
console.log(tentativa1)

const tentativa2 = realizarLogin("vinicios", "")
console.log(tentativa2)