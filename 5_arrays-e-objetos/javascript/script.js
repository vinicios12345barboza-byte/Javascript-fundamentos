
// 1 - arrays
const lista = [1,2,3,4,5]
console.log(lista);
console.log(typeof lista);


const itens = ["V23", false, 2, 5.34, []]
console.log(itens)

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "e"];
let aa = 4
console.log(arr[aa])
console.log(arr[2])

// 3 - Propriedades
const numbers = [5, 4, 3]
console.log(numbers.length);

const myName = "Vinicios"
console.log(myName.length);


// 4 - Métodos
const otherNumbers = [2, 1, 0]
const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers);

const text = "Algum texto"
console.log(text.toUpperCase());
console.log(text.indexOf("x"));

// 5 - Objetos
const person ={
    name: "Vinicios",
    age: 19,
    job: "Programador"
}
console.log(person)
console.log(person.name)
console.log(person.job)
person.KG = 57;
console.log(person)


// 6 - criando e deletando propriedades
const car ={
    engine: 2.0,
    brand: "Hyundai",
    model: "Creta",
    km: 20000
}
console.log(car);

car.doors = 4;
console.log(car)

delete car.km;
console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "Teste",
    b: true
}
console.log(obj instanceof Object);

const obj2 ={
    c: []
}
Object.assign(obj2, obj);
console.log(obj2);


// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.keys(person))

console.log(Object.entries(obj))
console.log(Object.entries(person))


// 9 - Mutação
const a ={
    name: "Bianco"
}

const b = a
console.log(a);
console.log(b);
console.log(a === b)
a.age = 23
console.log(b)
console.log(a)
delete b.age
console.log(a)
console.log(b)


// 10 - loops em arrays
const users = ["Vinicios", "Bianco", "v23"];
for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)
}

let numeros = [30, 40, 20]
let total = 0

for(let i = 0; i < numeros.length; i++){
    total = total + numeros[i]
}

console.log(total)

// 11 - Métodos de array: push e pop 
const frutas = ["Banana", "Morango", "Abacate"]
frutas.push("Maça")
console.log(frutas)
console.log(frutas.length)
frutas.pop()
console.log(frutas)
const itemRemovido = frutas.pop()
console.log(itemRemovido)
console.log(frutas) 
frutas.push("Pitaya", "Manga", "Uva")
console.log(frutas)

// 12 - Métodos de array: shift e unshift
const carros = ["Ix35", "Voyage", "Corolla"]
const carror = carros.shift()
console.log(carros)
console.log(carror)
carros.unshift("Creta")
console.log(carros)
// 13 - 
// 14 - 
// 15 - 
// 16 - 