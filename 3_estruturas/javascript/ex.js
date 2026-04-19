const nomeporra = prompt("Digite seu nome: ");
alert(`Seu nome é ${nomeporra.toUpperCase()}`);

const usserGmail = prompt("Digite seu gmail: ")
const userNamee = prompt("Digite seu nome: ")
const userAgee = Number(prompt("Digite sua idade: "))

if(userNamee.toLowerCase() === "vinicios" && userAgee === 19){
    console.log("Bem vindo magnata!")
} else if(userNamee){
    console.log(`Bem vindo, ${userNamee}, você tem ${userAgee} anos. E seu nome tem ${userNamee.length} letras.`);
}

/*
let ano_atual = prompt("Qual é o ano atual?");
let ano_nas = prompt("Em que ano você nasceu? ");
let idatual = alert(`Sua idade é ${ano_atual - ano_nas}`);
if(ano_atual > 18){
    alert("Pode entrar")
} else {
    alert("Não pode acessar")
}
*/

let nu = prompt("Digite um número: ");
nu = (Math.random() * (23 - 1) + 1);
Math.ceil(nu);
console.log(Math.ceil(nu));

let nuu = prompt("Digite um número pra fazer a raíz quadrada");
let pega = Math.round(Math.sqrt(nuu));
let s = alert(`A raiz quadrada de ${nuu} é ${pega}`);

let nac = prompt("Qual a sua nacionalidade?");
if(nac == "Brasileiro"){
    alert("Você é do brasil!");
} else {
    alert("Você é estranheiro");
}
//  função e objeto
let pessoa = {
    nome: "Vinicios",
    falar: function(){
        console.log("Oi!");
    }
};
pessoa.falar(); 

let p = 0
while( p < 5){
   console.log(`Todos somos menor que cinco ${p}`)
    p++;
}

let o = 10
do{
    console.log(`Sla ${o}`)
    o--
} while( o > 0);


for(let tabu = 0; tabu < 20; tabu++){
    if(tabu % 2 === 0){
        console.log("É par")
    } else{
        console.log("ÍMPAR")
    }
}

for(let numero = 1; numero < 11; numero++){
    console.log('5 x ' + numero  + ' = ' +  5*numero);
}


let secreto = 23
let chute = 0
while(chute !== secreto){
    chute = Number(prompt("Chute um número de 1 a 30:"));

    if(chute > secreto){
        alert("Muito alto!")
} else if(chute < secreto){
        alert("Muito baixo!")
} else {
        alert("Acertou genio da nasa !")
}
};



// let infi = 1;
// while( infi < 101 ){
//     console.log(`Somaando ${infi}`);
//     infi++
// }