// 1 - adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", () =>{
    console.log("Clicou aqui!")
})

// 2 - removendo evento
const secondBtn = document.querySelector("#btn")
function imprimirMensagem(){
    console.log("teste")
}
secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", ()=>{
    console.log("Evento removido!")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do evento
const h11 = document.querySelector("#t-i")
h11.addEventListener("click", (e) =>{
    console.log(e)
    console.log(e.type)
    console.log(e.target)
})

// 4 - propagação
const containerBtn = document.querySelector("#btn-container")
const containerBtnDento = document.querySelector("#div-btn")

containerBtn.addEventListener("click", ()=>{
    console.log("Evento 1")
})

containerBtnDento.addEventListener("click", (e)=> {
    e.stopPropagation()
    console.log("Evento 2")
})


// 5 removendo evento padrão
const a = document.querySelector("a")
a.addEventListener("click", (e) =>{
    e.preventDefault()

    console.log("Não abriu o link porque eu controlei!")
})

// 6 - eventos de tecla
// document.addEventListener("keyup", (e) =>{
//     console.log(`Soltou a tecla: ${e.key}`)
// })

// document.addEventListener("keydown", (e) =>{
//     console.log(`Apertou a tecla:${e.key} `)

//     if(e.key === "Enter"){
//         console.log("Usuário entrou")
//     }
// })

// 7 - eventos mouse
const mouseEvents = document.querySelector("#mouse")
mouseEvents.addEventListener("mousedown",() =>{
    console.log("Pressionou botão")
})

mouseEvents.addEventListener("mouseup",() =>{
    console.log("Soltou botão")
})


mouseEvents.addEventListener("dblclick",() =>{
    console.log("Clik duplo botão")
})

// 8 - movimento de mouse
// document.addEventListener("mousemove", (e) =>{
//     console.log(`Mouse no eixo X: ${e.x}`)
//     console.log(`Mouse no eixo Y: ${e.y}`)
// })

// 9 - evento scroll
window.addEventListener("scroll", (e) =>{
    const posiAtual = window.scrollY

    console.log(`Usuário está na posição: ${posiAtual} px do topo`)

    if(posiAtual > 500){
        console.log("Mostrar botão de 'voltar ao topo' na tela!")
    } else{
        console.log("Esonder botão!")
    }
})

// 10 - evento de foco
const inputt = document.querySelector("#email")
inputt.addEventListener("focus", (e) =>{
  
     inputt.style.color = "red"
    console.log("Entrou no input!")
})

inputt.addEventListener("blur", (e) =>{
     inputt.style.backgroundColor = "blue"
    console.log("saiu do input!")
})


// 11 - Evento de carregamento de tela
window.addEventListener("load", () => {
    console.log("Toda a página, imagens e scripts foram carregados com sucesso!");
});

window.addEventListener("beforeunload", (e) => {
   e.preventDefault()
   e.returnValue = ""
});

// 12 - debouce
let temporizador;

window.addEventListener("scroll", () =>{
    clearTimeout(temporizador)

    temporizador = setTimeout(() =>{
        console.log("Executando cálculo pesado do scroll com segurança!")
    }, 500)
})

