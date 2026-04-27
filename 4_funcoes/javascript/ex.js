// function soma(a, b){
//    return a + b;
// }

// function menos(a, b){
//     return a - b;
// }

// function multiplicar(a, b){
//     return a * b;
// }

// function dividir(a, b){
//     return a / b
// }

// function calcular(a, b, operacao){
//     if(operacao === "+"){
//     return soma(a,b)
// } else if(operacao === "-"){
//     return menos(a, b)
// } else if(operacao === "*"){
//     return multiplicar(a, b)
// } else if(operacao === "/"){
//     return dividir(a,b)
// } else{
//      return "operação inválida"
// }
// }


// const operacao = prompt("Digite uma operação + - * /");
// const n1 = Number(prompt("Digite um número"));
// const n2 = Number(prompt("Digite outro número"));
// alert(calcular(n1, n2, operacao))


// // verificação
// let idade = 20
// function eMaiordeIdade(idade){
//     return idade >= 18;
// }

// console.log(eMaiordeIdade(idade));


// escopo
function teste(){
    let nome = "Vinicios"
   
     function teste2(){
        let nome = "Sarah"
        console.log(nome)
     }

     teste2()

}

teste()



let cor = "azul";

function um(){
    let cor = "verde";

    function dois(){
        console.log(cor);
    }
   dois()
}

um()

let nome = "Avô";

function pai() {
    let nome = "Pai";

    function filho() {
        let nome = "Filho";
        console.log(nome);
    }

    filho();

    console.log(nome)
}

pai();

function praticar(num){
    if(num %2 === 0){
        console.log(num, "É par")
    } else{
        console.log(num, "É ímpar");
    }
}

praticar(7)



for(let s = 1; s < 20; s++){
    if(s  %2 == 0){
        console.log("é par")
    } else{
        console.log("ímpar")
    }
}


function chute(num){
    let secreto = 23
    if(num > secreto){
    console.log("Alto")
   } else if(num < secreto){
    console.log("Baixo")
   } else{
    console.log("acertou animal")
   }
}

chute(24);

let cor = "Azul";

function pai(){
   let cor = "Verde";
   
   function filho(){
       console.log(cor);
}

filho();
}

pai();