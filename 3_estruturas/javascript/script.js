/*
// 1 - Variáveis
let nome = "Vinicios";
console.log(nome);

nome = "Sarah";
console.log(nome)

const idade = 19;
console.log(idade)
// idade = 20; - const não pode mudar 

const idadee = 18;
console.log(idadee, nome);

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variáveis
// let 2teste = "Inválido"
// let @teste = "Inválido"

let a = 10, b =20, c = 30
console.log(a, b, c);

let nomecompleto = "Vinicios Barboza";
let nomeCompleto = "Sarah Vieira";
console.log(nomecompleto);
console.log(nomeCompleto);

// const nomecompletin = prompt("Digite seu nome completo: ");
// alert(`Seu nome completo é: ${nomecompletin}`);

// simbolos permitidos para variáveis
let _teste = "ok";
let $teste = "ok";
console.log(_teste, $teste); 


// 3 - Função Prompt 
const age = prompt("Digite a sua idade: ");
console.log(`Você tem ${age} anos`);

// 4 - Função Alert
 alert("Testando nesta porra");
 const z = prompt("Digite um número:");
 alert(`O número é ${z}`);


// 5 - Função Math.x
    console.log(Math.max(5, 2, 1, 10, 23));
    console.log(Math.floor(47.83));
    console.log(Math.ceil(21.4));

const calcu = Math.random() * (100 - 1) + 1;  
 console.log(Math.ceil(calcu)); 
 console.log(`Seu número sorteado é ${Math.ceil(calcu)}`);

let mate = Math.log2(1000)
    console.log(Math.ceil(mate));
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
    {nome: "Sarah", idadee: 18}
];
console.table(users); 
*/

// 7 - if
const m = 10;
   if(m > 5){
    console.log("M é maior que 5");
}

const u = "23";
  if(u == 23){
    console.log("Olá, 23!");
} else {
    console.log("Você tem outro número")
}

if(u === "30"){
    console.log("Olá, 30!");
}

console.log( u === "23", u === "30");

let naci = prompt("Qual a sua nacionalidade?");
if(naci == "Brasileiro"){
    alert("Você é brasileiro!");
    console.log(`Sua NACIONALIDADE é ${naci}`)
} 

// 8 - else
// const loggedIn = false 

// if(loggedIn){  // (loggedIn === true)
//     console.log("Está autenticado!")
// } else {
//     console.log("Não tem login!")
// }

// const q = 10
// const w = 15

// if(q > 5 && w > 20){
//     console.log("Números mais altos")
// } else {
//     console.log("Os números não são mais altos!")
// }


const lg = "Vinicios@gmail.com"
const shiu = prompt("Qual é o seu gmail?")
if(shiu === lg ){
    console.log("Seu login está certo")
    alert("Você tem cadastro!")
} else {
    console.log("Você não tem login nesta porra!")
    alert("Você não tem conta!")
} 

// 9 - else if (funciona quando um script é verdadeiro)
 if(1 > 2){
    console.log("Não!")
} else if(2 > 3){
    console.log("2Não!")
} else if(5 > 1){
     console.log("Sim!")
}

const userName = "Vinicios"
const userAge = 19
 if(userName === "Bianco"){
    console.log("Bem vindo Bianco!")
} else if(userName === "Vinicios" && userAge === 19){
     console.log(`Bem vindo de volta ${userName}, você tem ${userAge}`);
} else {
    console.log("Nenhuma condição aceita!")
}

let ida = 19
    if(ida > 16 && ida <18 || ida > 65) {
    console.log("O voto é opcional")
} else if(ida < 15){
    console.log("Você não pode votar")
 } else {
    console.log("Você é obrigado a votar!")
}

let vel = 54
    if(vel <= 70){
    console.log("Dirija com segurança!")
} else if(vel <= 90){
console.log("Cuidado na pista!!")
 } else {
   console.log("MULTADO!")
}


// 10 - while
let p = 0
while(p < 5 ){
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

let y = 1
while(y < 11 ){
   console.log(`Vamos contar: ${y}`);
   y++;
}


let c = 10
while(c >= 0){
    console.log(c)
    c-- // (c = c -1)  
}

// loop infinito quando não tem incrementador
// let x = 0;
// while(x > 5){
//     console.log("infinitooooo")
// }

let i = 0;
while(i < 11){
   console.log('5 x ' + i + ' = ' + 5*i );
    i++;
}

// 11 - do while
let o = 10
do{
    console.log(`Valor de o: ${o}`)
    o--
} while(o > 1);
 

// 12 - for
for( let y = 1; y < 11; y++){
    console.log(`Vamos contar ${y}`)
}

for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...")
}

let r = 10
for(r; r > 0; r = r - 1){
    console.log(`O r está diminuindo ${r}`);
}

// 13 - identação
for(let ui = 0; ui < 10; ui++ ){
  if(ui * 2 > 10){
   console.log(`Maior que 10! ${ui}`);
  } else {
    if(ui / 2 === 0){
      console.log("Due 0")
}
}
}


// 14 - break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é ${g}`)

    if(g === 15){
        console.log("G é 15")
        break;
    }
}
/* 
for(let uiui = 50; uiui > 40; uiui--){
   console.log(`O valor de uiui é ${uiui}`)

  if(uiui === 45){
      console.log("Uiui é 45")
      break;
  }
}

uii = 50
while(uii > 40){
    console.log(`Uiui é maior ${uii}`)
    uii--;

    if(uii === 46){
        console.log(`é 46`)
        break;
    }
}  */

// 15 - continue
for(let s = 1; s < 20; s++){
    // operador resto = %
    if(s % 2 === 0){
        console.log('Par');
        continue;
    } else {
        console.log("Ímpar")
    }

}

// 16 - switch
const job = "Programador"
switch(job){
    case "Advogado":
        console.log("Você é advogado");
        break;
    case "Programador":
        console.log("Você é DEV");
        break;
    case "Pizzaiolo":
        console.log("Você é pizzaiolo");
        break;
    case "Engenheiro":
        console.log("Você é engenheiro");
        break;
    default:
        console.log("Registre seu trabalho no app.");
}

// switch "Errado"
const l = 100
switch(l){
    case 200:
        console.log("L 200");
    case 100:
        console.log("L 100");
    case 10:
        console.log("L 10");
    default:
        console.log("L não foi encontrado")
}