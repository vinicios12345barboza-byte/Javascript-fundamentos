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
const multiplication = (m,n) => {

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


// 8 - valor default
const customGreeting = (name, greet = "Olá") =>{
    return `${greet}, ${name}`;
}

console.log(customGreeting("Vi"));
console.log(customGreeting("Bianco", "Bom dia"))

const mostrarIdade = (idade = 18) => {
console.log(`Idade: ${idade}`);
}
mostrarIdade()
mostrarIdade(23)

const repeatText = (text, repeat = 2) =>{
    for(let i = 0; i < repeat; i++){
        console.log(text);
    }
}

repeatText("Testando")
repeatText("Agora repete 3 vezes", 3);

// 9 - closure
const someFuction = () =>{
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display()
}

someFuction()

// 10 - mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}
const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)
console.log(c1)
console.log(c2)
console.log(c1(5))
console.log(c2(10))


// 11 - recursion
const untilTen = (n, m) => {
    if( n < 10){
        console.log("A função parou de executar!")
    } else {
        const x = n - m
        console.log(x)

        untilTen(x, m);
    }
}

untilTen(20, 5);

const factorial = (x) =>{
    if(x === 0){
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6
const result = factorial(num)
console.log(`O fatorial do número ${num} é ${result}`)