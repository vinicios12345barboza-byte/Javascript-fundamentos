const nomeporra = prompt("Digite seu nome: ");
alert(`Seu nome é ${nomeporra}`);

let ano_atual = prompt("Qual é o ano atual?");
let ano_nas = prompt("Em que ano você nasceu? ");
let idatual = alert(`Sua idade é ${ano_atual - ano_nas}`);

let nu = prompt("Digite um número: ");
nu = (Math.random() * (23 - 1) + 1);
Math.ceil(nu);
console.log(Math.ceil(nu));

let nac = prompt("Qual a sua nacionalidade?");
if(nac == "Brasileiro"){
    alert("Você é do brasil!");
} else {
    alert("Você é estranheiro");
}

let nuu = prompt("Digite um número pra fazer a raíz quadrada");
let pega = Math.round(Math.sqrt(nuu));
let s = alert(`A raiz quadrada de ${nuu} é ${pega}`);