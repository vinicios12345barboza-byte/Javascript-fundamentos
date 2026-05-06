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
let p = 0

while( p < pqp.length){
    console.log(pqp[p])
    p++
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
let pp = 0
while(pp < pessoas.length){
    let pessoa = pessoas[pp]

    if(pessoa.idade >= 18){
        console.log(pessoa.nome)
    }

    if(pessoa.idade < 10){
        console.log(`Você é muito novo, ${pessoa.nome}`)
    }

    
    pp++

}


// let numeros = [2, 4, 6];
// let total = 0;

// let a = 0;

// while(a < numeros.length){
//     let numero = numeros[a];
//     total = total + numero;
//     a++;
// }

// console.log(total);