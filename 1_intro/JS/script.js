console.log(Number("123"))
console.log(Number("123z"))
console.log(Number(true))
console.log(Number(false))

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean("Hello"))
console.log(Boolean(""))


function jogo(numero){
    
    const segredo = 7

    if(numero < segredo){
        console.log("É maior")
    } 
    
    else if(numero > segredo){
        console.log("É menor")
    } 
    
    else{
        console.log("Acertou!")
    }
}

jogo(8)