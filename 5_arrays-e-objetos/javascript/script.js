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
const numbers = [5, 3, 4]
console.log(numbers.length);

const myName = "Vinicios"
console.log(myName.length);


// 4 - Métodos
const otherNumbers = [1, 2, 3]
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

console.log(Object.entries(obj))
// 9 - 
// 10 - 
// 11 - 
// 12 - 
// 13 - 
// 14 - 
// 15 - 
// 16 - 