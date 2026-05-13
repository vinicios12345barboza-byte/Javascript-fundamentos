const alquimia = (energiadoAlquimista, materialDisponivel)=>{

   if(energiadoAlquimista >= 50 && materialDisponivel){
      console.log("ALQUIMIA MIDIA")
      return
   }

   console.log("VAZAAAAAAAA")
}

alquimia(67, true)


const login = (email, senha, nivel) => {
   if(!email && !senha){
      console.log("Você não tem conta")
      return
   }

   const loginValido = email == "Vinicios123@email.com"
   const senhaValida = senha == 1234

   if(!loginValido && !senhaValida){
      console.log("Email e senha inválidos")
      return
   }

   if(!loginValido){
      console.log("Email inválido")
      return
   }

   if(!senhaValida){
      console.log("Senha inválida")
      return
   }

   if(nivel < 2){
      console.log("Sai betinha")
      return
   }

   console.log("Login feito")
}

login("Vinicios123@email.com", 1234, 3)

let str = "123"
console.log(typeof str)
let num = Number(str)
console.log(typeof num)

let age = Number("an arbitrary string instead of a nb")
console.log(age)




// let o = 0 
// while(o < 10){
//     console.log(`Vamos contar ${o}`)
//     o++
// }

// let p = 10
// do{
//     console.log(`${p}`)
//     p = p -1
// } while( p > 0)

// let dia = Number(prompt("Digite um número"));
// switch(dia){
//     case 0:
//         alert("Domingo");
//         break;
//     case 1:
//         alert("Segunda");
//         break;
//     case 2:
//         alert("Terça");
//         break;
//     case 3:
//         alert("Quarta");
//         break;
//     case 4:
//         alert("Quinta");
//         break;
//     case 5:
//         alert("Sexta");
//         break;
//     case 6:
//         alert("Sábado")
//         break;
//     default:
//         alert("Não existe!")
// }


