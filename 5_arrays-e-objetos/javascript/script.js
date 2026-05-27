/*
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
carros.unshift("Creta", "Nivus")
carros.unshift("Tinguan")
console.log(carros)



// 13 - Métodos de array: indexOf e lastIndexOf
const myElements = ["Morango", "Maça", "Abacate", "Pera", "Abacate"]
console.log(myElements.indexOf("Maça"))
console.log(myElements.indexOf("Abacate"))
console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")])
console.log(myElements.lastIndexOf("Abacate")) 
*/

// 14 - métodos de array: slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testeSlice.slice(2, 4);
console.log(subArray)
console.log(testeSlice)
const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)


// 15 - métodos de array: forEach
const nums = [1, 2, 3,4, 5]
nums.forEach((numero) =>{
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundno post", category: "Python"},
    {title: "Terceiro post", category: "Java"},
];
posts.forEach((post) => {
    console.log(`Esses são os posts: ${post.title}, da categoria: ${post.category}`)
})

// 16 - métodos de array: incloudes
const brands = ["BMW", "Hyundai", "FIAT"]
console.log(brands.includes("FIAT"));
console.log(brands.includes("KIA"));
if (brands.includes("BMW")){
    console.log("Há carros da bmw!")
}

// 17 - métodos de array: reverse
const reverseTest = [1, 2, 3 ,4, 5]
reverseTest.reverse();
console.log(reverseTest);


// 18 - métodos de string: trim
const trimTest = "  testando \n     "
console.log(trimTest)
console.log(trimTest.trim())
console.log(trimTest.length)
console.log(trimTest.trim().length)


// 19 - métodos de string: padStar
const testePadStar = "1"
const newNumbar = testePadStar.padStart(4, "0")
console.log(testePadStar)
console.log(newNumbar)
const testePAdEnd = newNumbar.padEnd(10, "0")
console.log(testePAdEnd)

// 20 - métodos de string: Split
const frase= "O rato roeu"
const arrayDaFrase = frase.split(" ")
console.log(arrayDaFrase)


// 21 - métodos de string: Join
const fraseDenovo = arrayDaFrase.join(" ")
console.log(fraseDenovo)
const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`
console.log(fraseDeCompra)

// 22 - métodos de string: Repeat
const palavra = "Testando "
console.log(palavra.repeat(5))

// 23 - Rest operator
const somaInfinita = (...argumentos) =>{
    let total = 0
    for(let i = 0; i < argumentos.length; i++){
        total += argumentos[i]
    }
    return total
}
console.log(somaInfinita(1,2,3))
console.log(somaInfinita(20, 23, 1))


// 24 - Estrutura for of
const somaInfinita2 = (...arg) =>{
    let total = 0
    for(num of arg){
        total += num;
    }
    return total;
}
console.log(somaInfinita2(1,2,3));

// 25 - Destructuring em objetos
const userDetails = {
    firstName: "Sarah",
    lastName: "Vieira",
    job: "QA"
}
const{firstName, lastName, job} = userDetails
console.log(firstName, lastName, job)
  
// renomear variaveis
const{firstName: primeiroNome} = userDetails
console.log(primeiroNome)

// 26 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"]
const[veiculoA, veiculoB, veiculoC] = myList
console.log(veiculoA, veiculoB, veiculoC)


// 27 - Conhecendo o JSON
const myJSon = '{"name": "Vinicios", "age": 19, "skills": ["JavaScript", "Python", "Ruby"]}';
console.log(myJSon)
console.log(typeof myJSon)

// 28 - Conversão de JSON (JSON para objeto e objeto para JSON)
const myObject = JSON.parse(myJSon)
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject) 

// json invalido
const badJson = '{"name": vinicios, "age": 19 }';
// const myBad = JSON.parse(badJson)

myObject.programador = true
console.log(myObject)

const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)
console.log(typeof myNewJson)