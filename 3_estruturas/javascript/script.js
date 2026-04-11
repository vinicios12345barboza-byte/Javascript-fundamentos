/*
// 1 - Variáveis
let nome = "Vinicios";
console.log(nome);

nome = "Sarah";
console.log(nome)

const idade = 19;
console.log(idade)

const idadee = 18;
console.log(idadee, nome);

// idade = 20; - const não pode mudar 

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variáveis
// let 2teste = "Inválido"
// let @teste = "Inválido"

let a = 10, b =20, c = 30
console.log(a, b, c);

let nomecompleto = "Vinicios Barboza";
let nomeCompleto = "Vinicios Bianco";

// const nomecompleto = "Vinicios henrique Barboza"
// const nomeCompleto = "Sarah vieira castro"

// const nomecompletin = prompt("Digite seu nome completo: ");
// alert(`Seu nome completo é: ${nomecompletin}`);

console.log(nomecompleto);
console.log(nomeCompleto);

// simbolos permitidos para variáveis
let _teste = "ok";
let $teste = "ok";
console.log(_teste, $teste);

// 3 - Função Prompt 
// const age = prompt("Digite a sua idade: ")
// console.log(`Você tem ${age} anos`)

// 4 - Função Alert
// alert("Testando nesta porra");
// const z = prompt("Digite um número:");
// alert(`O número é ${z}`);

// 5 - Função Math.x
console.log(Math.max(5, 2, 1, 10, 23));
console.log(Math.floor(47.83));
console.log(Math.ceil(21.4));

const calcu = Math.random() * (100 - 1) + 1;  
console.log(Math.ceil(calcu)); 

let mate = Math.log2(1000)
console.log(Math.ceil(mate));
a
let sla = Math.sqrt(23);
console.log(Math.round(sla));

// floor() - arredonda
// pow() - potência 
// sqrt() - raiz quadrada
// ceil() - arredondar pra cimar pra baixo
// random() - número aleatório entre 0 e 1

// 6 - Função console.
console.log("Esse é o log!");
console.error("Esse é o console.error - erro!");
console.warn("Console.warn - aviso!")

const users = [
    {nome: "Vinicios", idadee: 19 },
    {nome: "Bianco", idadee: 23}
];
console.table(users); */

// 7 - if
const m = 10;
if(m > 5){
    console.log("M é maior que 5");
}

const u = "23";
if(u == 23){
    console.log("Seu user é 23!");
}

let naci = prompt("Qual a sua nacionalidade?");
if(naci == "Brasileiro"){
    alert("Você é brasileiro!");
    console.log(`Sua NACIONALIDADE é ${naci}`)
} 