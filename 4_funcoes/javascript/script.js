/*
// 1 - Criando uma função
function minhaFuncao(){
    console.log("Testando")
}
minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável")
}
minhaFuncaoEmVariavel();

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}
funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("Outra funçap");

// 2 - return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(a, d));

function menos(n3, n4){
    return n3 - n4;
}
console.log(menos(b, c)); 

// 3 - escopo da função
let y = 10;
function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é ${y}`);
}

testandoEscopo();

console.log(`Y fora da função é: ${y}`);
testandoEscopo();

// 4 - escopo aninhado
let m = 10
function escopoAninhado(){
    let m = 20
    if(true){
        let m = 30

        if(true){
            let m = 40
            console.log(m)
        }
        console.log(m)
    }

    console.log(m)

}
escopoAninhado();
console.log(m)

// 5 - arrow fuction
const testeArrow = () => {
    console.log("Está é uma arrow function")
}

testeArrow()

const parOuImpar = (n) =>{
    if( n %2 === 0){
        console.log("Par")
        return;
    }

    console.log("Impar")
}
parOuImpar(34)
parOuImpar(13)


const multiplicarr = (a, b) =>{
    return a * b;
}
console.log(multiplicarr(5,5));


const dobro = (n) =>{
    return n * 2
}
console.log(dobro(10));


const saudar = (nome) =>{
    return `Olá, ${nome}`
}

console.log(saudar("v23"));

// 6 - mais sobre arrow function
const raizQ = (x) => {
    return x * x
}
console.log(raizQ(4));

const raizQ2 = (x) => x * x
console.log(raizQ2(5));
console.log(raizQ2(12));

const saudar2 = (nome) => `Olá, ${nome}`
console.log(saudar2("B"));

const helloWorld = () => console.log("Olá, mundo");
helloWorld();
*/



// 7 - parametro opcional
const multiplication = function(m,n){

    if(n === undefined){
        return m * 2
    } else {
        return m * n
    }
}
console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
    if(!name){
        console.log("Visitante");
        return;
    }

    console.log(`Seja bem-vindo(a), ${name}`)
}
greeting()
greeting("Vinicios")

const mostrarIdade = (idade = 18) => {
    console.log(`Idade: ${idade}`);
}

mostrarIdade()
mostrarIdade(23)
