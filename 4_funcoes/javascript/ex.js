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



// let cor = "azul";

// function um(){
//     let cor = "verde";

//     function dois(){
//         console.log(cor);
//     }
//    dois()
// }

// um()

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

const chuteDois = (numm) =>{
    let secreto2 = 7

    if(numm > secreto2){
        console.log("Muito alto")
        return;
    }

    if(numm < secreto2){
        console.log("Muito baixo")
        return;
    }

    console.log("Acertou mizeravi")
}

chuteDois(7)

// let cor = "Azul";

// function pai(){
//    let cor = "Verde";
   
//    function filho(){
//        console.log(cor);
// }

// filho();
// }

// pai();

const podeDirigir = (idade, cnh) => {
   if(idade < 18){
     console.log("Não pode dirigir")
     return;
   }

   if(!cnh){
      console.log("Precisa tirar CNG")
   }

   console.log("Pode dirigir")
}

podeDirigir(18, false)

// const entrarFetsa = (idade, nomeNaLista) => {
//     if(idade >= 18 && nomeNaLista){
//         console.log("Pode entrar")
//     } else if( idade >= 18 && !nomeNaLista){
//         console.log("Falar com segurança")
//     } else{
//         console.log("Barrado")
//     }
// }

// entrarFetsa(17)

// const login = (email, senha) =>{
//     if(email === "Admin" && senha === 1234){
//         console.log("email feito")
//     } else if(email !== "Admin"){
//         console.log("Email inválido")
//     } else if(email === "Admin" && senha !== 1234){
//         console.log("Senha inválida")
//     } else{
//         console.log("Email ou senha inválida")
//     }
// }

// login("Admin", 134)

const login = (email, senha) =>{
    const emailValido = email === "Admin"
    const senhaValida = email === 1234

    if(!emailValido && !senhaValida){
        console.log("Email e senha inválidos")
        return
    }

    if(!emailValido){
        console.log("Email inválido")
        return;
    }

    if(!senhaValida){
        console.log("Senha inválida")
    }

    console.log("Login feito")
}

login("Admin", 1234);

// const entrarFetsa = (idade, nomeNaLista) => {
//     if(idade >= 18 && nomeNaLista){
//         console.log("Pode entrar")
//     } else if( idade >= 18 && !nomeNaLista){
//         console.log("Falar com segurança")
//     } else{
//         console.log("Barrado")
//     }
// }

// entrarFetsa(17)
const entraFesta = (idade, nomeL) =>{
    if( idade < 18){
        console.log("Barrado!")
        return;
    }

    if(!nomeL){
        console.log("Falar com segurança")
        return;
    }

    console.log("Pode entrar");
}



const acessoSistema = (user, senhas, nivel) =>{
    const users = user = "Admin"
    const senhass = senhas = 1234

    if(!users && !senhass){
        console.log("Email e senha inválidos");
        return;
    }

    if(!users){
        console.log("Email inválido")
        return;
    }

    if(!senhass){
        console.log("Senha inválida")
        return;
    }

    if(nivel < 2){
        console.log("Aceso limitado")
        return;
    }

    console.log(`Seja bem vindo(a), ${user}`)
}

acessoSistema("Admin", 1234, 3)

const vericarIdade = (ida) =>{
    if(ida > 65 || ida < 16){
        console.log("Proibido")
        return;
    }

    if(ida <= 17){
        console.log("Acompanhado apenas")
        return;
    }
    

    console.log('Pode entrar calabreso')

}

vericarIdade(78)


/* exercicios
const faixa =(idd) =>{
    if(idd < 13){
        console.log("Criança")
        return
    }

    if(idd >= 13 && idd <=17){
        console.log("Adolescente")
        return;
    }

    console.log("Adulto")
}

faixa(17)

const temperatura = (temparad) => {
    if(temparad > 40 || temparad < 0){
        console.log("Extremo")
        return;
    }

    console.log("Normal")
}

temperatura(23)

const notaSarah = (nota) =>{
    if(nota > 7){
        console.log("Aprovada")
    } else if ( nota >= 5){
        console.log("Recuperação.")  
    } else{
        console.log("Reprovada")
    }
}

notaSarah(7)

const logi = (u, s) =>{
    const uss = u == "Admin"
    const sen = s == 1234

    if(!uss){
        console.log("User inválido")
        return;
    }

    if(!sen){
        console.log("Senha inválida.")
        return;
    }

    console.log("Login feito");
}

logi("Admin", 1234)



const pqp = (i) =>{
    if(i >= 18 && i <= 21){
        console.log("Especial")
        return
    }
}

pqp(19)

const pqp2 = (i2)=>{
    if(i2 < 18){
        console.log("Menor")
        return;
    }

    console.log("Maior")
}

pqp2(17)

const acessoFesta = (id , n) =>{
    if(id < 18){
        console.log("Barrado")
        return;
    }

    if(!n){
        console.log("Falar com segurança")
        return
    }

    console.log("Entrar")
}

acessoFesta(18, false)

const nivelU =(nivel) =>{
    if(nivel >= 10){
        console.log("Admin")
        return;
    } 

    if(nivel >= 5){
        console.log("Moderado")
        return;
    }

    console.log("Usuário")
}

nivelU(12)

const check = (nivelCheck) => { 
// const nivelCheck = nivel == 5
    if(nivelCheck <= 2){
        console.log("Baixo")
        return
    }

    console.log("Alto")
}

check(2);

const dirigirr = (ih, cn) =>{
    if (ih < 18){
        console.log("Não pode dirigir")
        return;
    }

    if(!cn){
        console.log("Não tem CN");
        return;
    }

    console.log("Pode dirigir")
}

dirigirr(18, false);
*/

const s = (id, nam, nn) =>{
    const idd = id == 23
    const namee = nam === "V23"

    if(!idd && !namee){
        console.log("id e user inválidos");
        return;
    }

    if(!idd){
        console.log("Id inválido")
        return;
    }

    if(!namee){
        console.log("User inválido")
        return
    }

    if(nn < 5){
        console.log("Você ainda é iniciante.")
        return
    }

    console.log("Seja bem vindo.")
}

s(23, "V23", 4)