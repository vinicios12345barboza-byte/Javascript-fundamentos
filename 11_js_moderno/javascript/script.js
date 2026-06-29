// 1 -  var, let e const
var x = 10
var y = 15

if(y > 10){
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}
console.log(a)

function logName(){
    const name = "Vinicios"
    console.log(name)
}
const name = "Barboza"
logName()
console.log(name)

// 2 - arrow functions
const sum = function(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b;
console.log(sum(5, 5))
console.log(arrowSum(5, 1))

const greeting = (name) =>{
    if(name){
        return `Hello, ${name}`
    } else{
        return `Hello, visitante`
    }
}

console.log(greeting("Vinicios"));
console.log(greeting());

const user = {
    name: "Vi",
    sayUserName(){
        setTimeout(function(){
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow(){
        setTimeout(() =>{
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000)
    }
}
// user.sayUserName()
// user.sayUserNameArrow()

// 3 - filter
const arr = [1, 2, 3 , 4, 5, 6]
const highNumbers = arr.filter(n =>{
    if(n >= 3){
        return n
    }
})
console.log(highNumbers)

const users = [
    {name: "Vinicios", profissao: "Backend"},
    {name: "Sarah", profissao: "Designer"},
    {name: "Bianco", profissao: "Devops"},
    {name: "Fiasco", profissao: "Backend"},
    {name: "Bianco", profissao: "Frontend"},
]
const apenasDevelops = users.filter(u => u.profissao === "Backend" || u.profissao === "Devops" || u.profissao === "Frontend")
console.log(apenasDevelops)

const mudarProfissão = users.map(m =>{
    const clone  = {...m}
    if(clone.profissao === "Designer"){
        clone.profissao = "Frontend"
    }

    return clone

})
console.log(mudarProfissão)

// 4 - map
const funcionarios = [
    {name: "Vinicios", salario: "3500", nivel: "Junior"},
    {name: "Sarah", salario: "2500"},
    {name: "Fiasco", salario: "5500", nivel: "Pleno"},
    {name: "Sla", salario: "33.500", nivel: "Senior"},
];
const comBonus = funcionarios.map(f => {
    let bonus = {...f,  bonus: 500}

    if(f.nivel === "Junior"){
        bonus.nivel = "Pleno"
        bonus.salario = "6500"
    }

    return bonus
})
console.log(comBonus)

// 5 -
// 6 -
// 7 -
// 8 -
// 9 -
// 10 -