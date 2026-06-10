// const usuarios = []
// const adicionarUsuarios =(nome, cargo, nivel) =>{
//     const novoUsuario = {id: usuarios.length +1, nome, cargo, nivel}

//     usuarios.push(novoUsuario)
//     console.log(`Usuário ${nome} adicionado! Do cargo: ${cargo}`)
// }

// const listarUsuarios = () => {
//     console.log("\n LISTA DE USUÁRIOS:\n")

//     const listaFormatada = usuarios.map((usuario) => {
//       return `ID: ${usuario.id} | NOME: ${usuario.nome} | CARGO: ${usuario.cargo} | NÍVEL: ${usuario.nivel || 'Não informado'}`;
//     });

//     console.log(listaFormatada.join("\n"));
// }

// const buscarUsuario = (nome) =>{
//     const usuarioEncontrado = usuarios.find((usuario) =>{
//         return usuario.nome === nome
//     })

//     if(usuarioEncontrado){
//         console.log("\n Usuário encontrado:")
//         console.log(usuarioEncontrado)
//     } else{
//         console.log("\n Usuário não encontrado.")
//     }

// }

// const removerUsuarios = (id) => {
//     // 1. Acha a posição (índice) do usuário na lista
//     const index = usuarios.findIndex(usuario => usuario.id === id);
    
//     // 2. Se encontrar (index diferente de -1), remove ele direto dali
//     if (index !== -1) {
//         usuarios.splice(index, 1); // Altera o array original direto, o que o const permite
//         console.log(`\n Usuário com ID: ${id} removido.`);
//     } else {
//         console.log("\n Usuário não encontrado.");
//     }
// }


// const encontrarUsuario = (nome)=>{
//      usuarios.forEach((usuario) =>{
//         console.log(`Esses são todos os usuarios ${usuario.nome}`)
//     })
// }

// const buscarPorId = (id) =>{
//   const usuarioEncontrado = usuarios.find((usuario) =>{
//     return usuario.id === id
//   })

//   if(usuarioEncontrado){
//     console.log(`Usuário encontrado:`)
//     console.log(usuarioEncontrado)
//   } else{
//     console.log("Usuário não encontrado")
//   }
// }

// const apenasDevops = (cargo) =>{
//    const listaDevops = usuarios.filter((usuario) =>{
//     return usuario.cargo === "Devops"
//    })
//    console.log(`\n Todos os devops:`)
//    console.log(listaDevops)

//    listaDevops.forEach((usuario, index) =>{
//     console.log(`
//       ${index + 1} - ${usuario.nome}
//       `)
//   })

// }

// const contarUsuarios = () =>{
//    console.log(`Total: ${usuarios.length} usuários`)
// }

// const obterCrachas = () =>{
//     const crachas = usuarios.map(usuario => `[${usuario.cargo}] - ${usuario.nome}`)
//     console.log("\n CRACHÁS GERADOS:", crachas)
// }


// const editarCargo = (id, novoCargo) =>{
//     const usuarioEncontrado = usuarios.find((usuario) =>{
//     return usuario.id === id
//     })

//     if(usuarioEncontrado){
//         usuarioEncontrado.cargo = novoCargo
//         console.log("Cargo atualizado!")
//         console.log(usuarioEncontrado)
//     } else{
//         console.log("Usuário não encontrado")
//     }
// }
// adicionarUsuarios("Sarah", "QA", "Junior")
// adicionarUsuarios("Vinicios", "Devops", "Junior")
// adicionarUsuarios("Sérgio", "Devops", "Sênior")
// adicionarUsuarios("Bruno", "Fullstack", "Sênior")
// apenasDevops("Devops")
// listarUsuarios()
// editarCargo(1, "Frontend")
// removerUsuarios(2)
// listarUsuarios()
// obterCrachas()

// 1. Criamos uma classe para gerenciar o sistema de usuários
class SistemaUsuarios {

    constructor() {
        this.usuarios = [];
    }

    adicionar(nome, cargo, nivel = "Não informado") {
        // Shorthand properties para nome, cargo, nivel
        const novoUsuario = { id: this.usuarios.length + 1, nome, cargo, nivel };
        this.usuarios.push(novoUsuario);
        console.log(`Usuário ${nome} adicionado! Cargo: ${cargo}`);
    }

    listar() {
        console.log("\nLISTA DE USUÁRIOS:");
        if (this.usuarios.length === 0) return console.log("Nenhum usuário cadastrado.");

        const listaFormatada = this.usuarios.map(u => 
            `ID: ${u.id} | NOME: ${u.nome} | CARGO: ${u.cargo} | NÍVEL: ${u.nivel}`
        );
        console.log(listaFormatada.join("\n"));
    }

    buscarPorNome(nome) {
        const encontrado = this.usuarios.find(u => u.nome === nome);
        console.log("\n🔍 Busca por nome:");
        console.log(encontrado ? encontrado : "❌ Usuário não encontrado.");
    }

    buscarPorId(id) {
        const encontrado = this.usuarios.find(u => u.id === id);
        console.log("\n🆔 Busca por ID:");
        console.log(encontrado ? encontrado : "❌ Usuário não encontrado.");
    }

    remover(id) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            console.log(`\n🗑️ Usuário com ID: ${id} removido.`);
        } else {
            console.log("\n❌ Usuário não encontrado para remoção.");
        }
    }

    filtrarPorCargo(cargo) {
        const filtrados = this.usuarios.filter(u => u.cargo === cargo);
        console.log(`\n💻 Usuários do cargo [${cargo}]:`);
        
        // .forEach curto usando Template Literals e o próprio index do array
        filtrados.forEach((u, i) => console.log(`  ${i + 1} - ${u.nome} (${u.nivel})`));
    }

    editarCargo(id, novoCargo) {
        const encontrado = this.usuarios.find(u => u.id === id);
        if (encontrado) {
            encontrado.cargo = novoCargo;
            console.log(`\n🔄 Cargo do ID ${id} atualizado para ${novoCargo}!`);
        } else {
            console.log("\n❌ Usuário não encontrado para edição.");
        }
    }

    obterCrachas() {
        const crachas = this.usuarios.map(u => `[${u.cargo}] - ${u.nome}`);
        console.log("\n🪪 CRACHÁS GERADOS:", crachas);
    }

    contarTotal() {
        console.log(`\n📊 Total: ${this.usuarios.length} usuários no sistema.`);
    }
}

const sistema = new SistemaUsuarios();

sistema.adicionar("Sarah", "QA", "Junior");
sistema.adicionar("Vinicios", "Devops", "Junior");
sistema.adicionar("Sérgio", "Devops", "Sênior");
sistema.adicionar("Bruno", "Fullstack", "Sênior");

sistema.filtrarPorCargo("Devops");
sistema.listar();
sistema.editarCargo(1, "Frontend");
sistema.remover(2);
sistema.listar();
sistema.obterCrachas();
sistema.contarTotal();


// filter
const arr = [1, 2,3 ,4,5,6]
const highNumbers = arr.filter((n) =>{
    if(n >= 3){
        return n
    }
})
console.log(highNumbers)

// map
const products = [
    {name: "Camisa", price: 10.99, categoria: "Roupas"},
    {name: "Chaleira elétrica", price: 150, categoria: "Eletro"},
    {name: "Fogão", price: 499, categoria: "Eletro"},
    {name: "Calça", price: 47.99, categoria: "Roupas"},
]

const promocao = products.map(product =>{
    if(product.categoria === "Roupas"){
        return {...product, onSale: true}
    }

    return product
})
console.log(products)
console.log(promocao)


const produtos = [
    {nome: "Teclado", preco: 150},
    {nome: "Mouse", preco: 80},
    {nome: "Monitor", preco: 900},
    {nome: "WEBCAM", preco: 100},
]
const apenasNomes = produtos.map(produto => produto.nome)
console.log(apenasNomes)
console.log(produtos)

// template literals
const userName = "VInicios"
const age = 19
console.log(`O nome do usuário é ${userName} e ele tem: ${age} anos.`)

// destructuring 
const fruts = ["Maça", "Banana", "Morango"]

const [f1, f2, f3] = fruts

console.log(f1, f3)

const saleFruts = fruts.map(fru =>{
   return {nome: fru, onSale: true}
})

console.log(saleFruts)

// spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]
console.log(a3)

const a4 = [0, ...a3, 7]
console.log(a4)

const carName = {name: "Creta"}
const carBrand= {brand: "Hyundai"}
const infos= {km: 1000, price: 150.000}

const carrr = {...carName, ...carBrand, ...infos}
console.log(carrr)

// classses OOP
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productDescont(desconto){
        return this.price * ((100 - desconto) / 100)
    }

}

const shirt = new Product ("Camisa Polo Wear", 150)
console.log(shirt)
console.log(shirt.productDescont(10))
console.log(shirt.productDescont(15))

class ProductGamer extends Product{
    constructor(name, produ, price){
        super(name, price)
        this.produ = produ
    }
}

const devProduct = new ProductGamer("GTAV", "Jogo físico", 230)
console.log(devProduct.name)
console.log(devProduct.productDescont(10))



class User{
    constructor(nome, senhaCorreta){
        this._nome = nome
        this._senha = senhaCorreta
        this.conectado = false
    }

    logar(senhaDigitada){
        if(senhaDigitada === this._senha){
            this.conectado = true
            console.log(`Login feito com sucesso!\nSeja bem vindo, ${this._nome}.`)
        } else{
            console.log("Senha inválida! Acesso negado.")
        }
    }

    deslogar(){
        this.conectado = false
        console.log(`${this._nome} saiu do sistema.`)
    }
}

const devJúnior = new User("Vinicios", "V2330S")
devJúnior.logar("jdhw")
devJúnior.logar("V2330S")
devJúnior.deslogar()

class Jogos{
    constructor(nome, genero, preco){
        this.nome = nome
        this.genero = genero
        this.preco = preco
    }

    aplicarDescont(valor){
        this.preco = this.preco - valor
        console.log(`Desconto aplicado! O jogo ${this.nome} está: R$ ${this.preco}! `)
    }
}

const jogo1 = new Jogos("GTA V", "Ação", 350)
const jogo2 = new Jogos("ZELDA", "RPG", 430)


const prateleiraJogos = [
    new Jogos("GTA V", "AÇÃO", 150),
    new Jogos("ZELDA", "RPG", 350),
    new Jogos("Minecraft", "SOBREVIVÊNCIA",99),
    new Jogos("LOL PREMIUM", "RPG", 530)
]

const apenasRPGs = prateleiraJogos.filter(jogo => jogo.genero === "RPG")
console.log("\n APENAS JOGOS RPG:")
console.log(apenasRPGs)

// com desconto!
apenasRPGs.map(jogo => jogo.aplicarDescont(20))
console.log(apenasRPGs)

console.log("\n APLICANDO PROMOÇÃO EM TUDO!")
prateleiraJogos.map(jogo => jogo.aplicarDescont(30))
