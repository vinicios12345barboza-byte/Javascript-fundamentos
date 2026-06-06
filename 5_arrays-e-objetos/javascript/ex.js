// let nomes = ["Vincios", "Sarah", "Valentina"]
// let i = 0

// while(i < nomes.length){
//     console.log(nomes[i]);
//     i++
// }

// let frutas = [10, 20, 30, 40];
// // 1. Mostra o primeiro número
// console.log(frutas[0])

// // 2. Mostra o último número
// console.log(frutas[3])

// // 3. Adiciona 50 no final
// frutas.push(50)

// // 4. Remove o primeiro número
// frutas.shift(10)

// // 5. Mostra o array final
// console.log(frutas)


let numeros2 = [8, 12, 20, 5, 15];
let cc= 0
let contador = 0

while(cc< numeros2.length){
    let numero2 = numeros2[cc]

    if(numero2 > 10){
        contador++
    }

    cc++
}

console.log(contador);

let numeros = [30, 40, 20]
let i = 0
let total = 0

while(i < numeros.length){
    let numero = numeros[i]
    total = total + numero
    i++
}
console.log(total)


let numeross = [5, 12, 8, 20];
let resultado = [];
let d = 0;

while(d < numeross.length){
    let numeroo = numeross[d];

    if(numeroo > 10){
        resultado.push(numeroo);
    }

    d++;
}

console.log(resultado);


const pqp = [10, 20,30,40]
for(let p = 0; p < pqp.length; p++){
    console.log(pqp[p])
}




const car ={
    engine: 2.0,
    brand: "Hyundai",
    model: "Creta",
    km: 20000,
    bancos: "couro",
    brinquedo: "Homem aranha"
}
delete car.km;

const car2 ={
    engine: 2.0,
    brand: "Hyundai",
    model: "Ix35",
    km: 20000,
    doors: 4, 
    vidro: "Fumê"
    
}

const resultadoo = {
    engine: car2.engine,
    brand: car2.brand,
    model: car2.model,
    bancos: car.bancos,
    brinquedo: car.brinquedo,
    doors: car2.doors,
    vidro: car2.vidro 
}
console.table(car)
console.log(resultadoo)


// Object.assign(car2, car);
// console.log(car2)


// array com objeto
let pessoas = [
    {nome: "Sarah", idade: 18},
    {nome: "Vinicios", idade: 19},
    {nome: "Luiz", idade: 2}
]

const sub = pessoas.slice(0,2)
console.table(sub)

// let pp = 0
// while(pp < pessoas.length){
    //     let pessoa = pessoas[pp]

    //     if(pessoa.idade >= 18){
//         console.log(pessoa.nome)
//     }

//     if(pessoa.idade < 10){
//         console.log(`Você é muito novo, ${pessoa.nome}`)
//     }


//     pp++

// }

// const login = ({ name, email, senha } = {}) => {
//     if (!email || !senha) {
//         console.log("Preencha email e senha")
//         return
//     }

//     const emailValido = email === "Vinicios12345@gmail.com"
//     const senhaValida = senha === 1234
//     const nomeValido = name === "vi"

//     if (!emailValido && !senhaValida) {
//         console.log("Email e senha inválidos!")
//         return
//     }

//     if (!emailValido) {
//         console.log("Email inválido")
//         return
//     }

//     if (!senhaValida) {
//         console.log("Senha inválida!")
//         return
//     }

//     if (!nomeValido) {
//         console.log("Seu nome está errado")
//         return
//     }

//     console.log("Seja bem vindo!")
// }
// let numeros = [2, 4, 6];
// let total = 0;

// let a = 0;

// while(a < numeros.length){
//     let numero = numeros[a];
//     total = total + numero;
//     a++;
// }

// console.log(total);



let jogos = [
    {nome: "Zelda", disponivel: true},
    {nome: "Mario", disponivel: false},
    {nome: "Minecraft", disponivel: true},
    {nome: "GTA V", disponivel: true},
    {nome: "FIFA", disponivel: false},
];

const vJogos = jogos.filter(jogo => jogo.disponivel).slice(0,2)
console.log(vJogos)


const Hyundai = [
    {modelo: "Creta", ano: 2026},
    {modelo: "IX35", ano: 2019},
    {modelo: "HB20", ano: 2024},
]

const disponivelHyundai = Hyundai.filter(hyu => hyu.ano === 2019)
console.log(disponivelHyundai)

const aros = Hyundai.map(aro =>{
    if(aro.modelo === "Creta"){
        return {...aro, corDoAro: "Aro Preto"}
    }

    return aro
})

console.log(Hyundai)
console.log(aros)


const roupas = [
    {nome: "camisa", preço: 50},
    {nome: "cueca", preço: 30},
    {nome: "casaco", preço: 120},
]
const disponivelRoupas = roupas.filter(roupa => roupa.preço <100)
console.log(disponivelRoupas)

const usuarios = [
    {id: 1, nome: "Sérgio", cargo: "Devops", carro: "IX35"},
    {id: 2, nome: "Bruno", cargo: "Devops", carro: "HB20"},
    {id: 3, nome: "Vinicios", cargo: "Engenheiro", carro: "Creta"},
]

for(const {nome, cargo}of usuarios){
   console.log(nome, cargo)
}
usuarios.forEach((user) =>{
    const {id, nome} = user
    if(id === 1){
        user.cargo = "Back"
        console.log(nome, user.cargo.padEnd(15, "."))
    }

})

console.log(usuarios)
const apenasDevops = usuarios.filter(user => user.cargo === "Devops" )
console.log(apenasDevops)

// apenas um e dois
const apenasUmeTres = usuarios.filter(user => user.id !== 2)
console.log(apenasUmeTres)


const usersComCarros = usuarios.map(usuario =>{

    const carroEncontrado = Hyundai.find(carro => carro.modelo === usuario.carro)

    return {
        ... usuario,
        dadosDOCarro: carroEncontrado
    }
})
console.log(usersComCarros)


// for(let j = 0; j < jogos.length; j++){
//     if(jogos[j].disponivel === true){
//         jogosEmEstoque.push(jogos[j])
//     }
// }

// let resultadoFIm = jogosEmEstoque.slice(0, 2)
// console.log(resultadoFIm)