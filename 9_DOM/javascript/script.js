// 1 - movendo-se pelo dom
console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent);

const textos = console.log(document.querySelectorAll(".text"));

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li")
console.log(listItens);


// 3 - selecionando por ID
const titulo = document.getElementById("title")
console.log(titulo);


// 4 - selecionando por classe
const products = document.getElementsByClassName("product")
console.log(products);

// 5 - selecioando por seletor de CSS
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer);


// 6 - insertBefore
const p = document.createElement("P")
const header = titulo.parentElement
console.log(header)

header.insertBefore(p, titulo)


// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")
li.textContent = "Produtos"

navLinks.appendChild(li)
 

// 8 - replaceChild
const h2 = document.createElement("h2")
h2.textContent  = "Meu novo título"

header.replaceChild(h2, titulo)


// 9 - creatTextNode
const myText = document.createTextNode("Mais um título novo")

const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3)

mainContainer.appendChild(h3)

// 10 - atributos setAttribute e getAttribute
const firstLink = navLinks.querySelector("a")

firstLink.setAttribute("href","https://www.google.com")
console.log(firstLink.getAttribute("href"))
firstLink.setAttribute("target", "_blank")


// 11 - altura e largura
const footer = document.querySelector("footer")
console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)


// 12 - posicao de elemento
const product1 = products[0]
console.log(product1.getBoundingClientRect())


// 13 - css com JS
mainContainer.style.color = "blue"
mainContainer.style.paddingBottom = "150px"
mainContainer.style.backgroundColor = "rgb(68, 168, 1168)"


// 14 - alterando estilos em varios elementos
for(const li of listItens){
    li.style.backgroundColor = "red"
    li.style.color = "black"
}

