/*
// 1 - Number
console.log(typeof 2);
console.log(typeof 5.98);
console.log(typeof -123);

// 2 - Operações aritméticas
console.log(5 + 4);
console.log(10 - 5);
console.log(23 * 3);
console.log(10 / 2);

console.log(5 + (4 * 2));

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "sla");
console.log(typeof NaN);

// 4 - String
console.log(typeof "Sla carai");
console.log(typeof `Texto nas crases`);
console.log(typeof  "23");


// 5 - Caractere especial
console.log("Testando a \nquebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi," + " tudo " + "bem?");
console.log(`Testando ` + `com ` + `crase`);

// 7 - Interpolação (template string)
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui! ${console.log("Vinicios Bianco")}`);

// 8 - Booleans 
console.log(true);
console.log( 5 > 20);
console.log(30 > 10); 
console.log(typeof false);


// 9 - Comparações
console.log(5 <= 5); 
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9 );
console.log(10 != 9 );

// 10 - Valor idêntico
console.log( 9 == "9");
console.log( 9 + "9");

console.log( 9 === "9");
console.log(9 != "9");
console.log(9 !== "9");  */


// 11 - Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Vinicios" === 1);
console.log(5 > 2 || "Vinicios" === 1);
console.log(5 < 2 || 5 > 100);

console.log(!true);
console.log(!5 > 2);

console.log(10 * 2 >= 20 || 30 - 20 == 10); 

var nome = "Vinicios"
console.log(300 * 2 == 600 || nome == "vinicios") 

let n1 = Math.max(3, 4, 34, 19)
let n2 = 20
let soma = n1 == 34 && n2 === 20
console.log(soma)

// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);


// 13 - Mudança de tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);
