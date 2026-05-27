const usuarios = []
const adicionarUsuarios =(nome, cargo, nivel) =>{
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome,
        cargo: cargo,
        nivel: nivel
    }

    usuarios.push(novoUsuario)
    console.log(`Usuário ${nome} adicionado! Do cargo: ${cargo}`)
}

const listarUsuarios = () => {
    console.log("\n LISTA DE USUÁRIOS:\n")

    usuarios.forEach((usuario) => {
        console.log(
        `ID: ${usuario.id}
         NOME: ${usuario.nome}
         CARGO: ${usuario.cargo}   
         NIVEL: ${usuario.nivel} 
         `)
    })
}

const buscarUsuario = (nome) =>{
    const usuarioEncontrado = usuarios.find((usuario) =>{
        return usuario.nome === nome
    })

    if(usuarioEncontrado){
        console.log("\n Usuário encontrado:")
        console.log(usuarioEncontrado)
    } else{
        console.log("\n Usuário não encontrado.")
    }

}

const removerUsuarios = (id) =>{
    const novaLista = usuarios.filter((usuario) =>{
        return usuario.id !== id
    })

    usuarios.length = 0
    novaLista.forEach((usuario) =>{
        usuarios.push(usuario)
    }) 

    console.log(`\n Usuário com ID ${id} removido.`)
}

const encontrarUsuario = (nome)=>{
     usuarios.forEach((usuario) =>{
        console.log(`Esses são todos os usuarios ${usuario.nome}`)
    })
}

const buscarPorId = (id) =>{
  const usuarioEncontrado = usuarios.find((usuario) =>{
    return usuario.id === id
  })

  if(usuarioEncontrado){
    console.log(`Usuário encontrado:`)
    console.log(usuarioEncontrado)
  } else{
    console.log("Usuário não encontrado")
  }
}

const apenasDevops = (cargo) =>{
   const listaDevops = usuarios.filter((usuario) =>{
    return usuario.cargo === "Devops"
   })
   console.log(`\n Todos os devops:`)
   console.log(listaDevops)

   listaDevops.forEach((usuario, index) =>{
    console.log(`
      ${index + 1} - ${usuario.nome}
      `)
  })

}

const contarUsuarios = () =>{
   console.log(`Total: ${usuarios.length} usuários`)
}


const editarCargo = (id, novoCargo) =>{
    const usuarioEncontrado = usuarios.find((usuario) =>{
    return usuario.id === id
    })

    if(usuarioEncontrado){
        usuarioEncontrado.cargo = novoCargo
        console.log("Cargo atualizado!")
        console.log(usuarioEncontrado)
    } else{
        console.log("Usuário não encontrado")
    }
}
adicionarUsuarios("Sarah", "QA", "Junior")
adicionarUsuarios("Vinicios", "Devops", "Junior")
adicionarUsuarios("Sérgio", "Devops")
adicionarUsuarios("Bruno", "Fullstack")
apenasDevops("Devops")
listarUsuarios()
editarCargo(1, "Frontend")