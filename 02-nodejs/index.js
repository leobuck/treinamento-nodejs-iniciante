// 0 Obter um usuario
// 1 Obter o numero de telefone de um usuario a partir de seu id
// 2 Obter o endereco do usuario pelo id

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date().toLocaleString()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            numero: '991234567',
            ddd: '11'
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos Bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(erro, usuario) {
    // null || "" || 0 === false
    if (erro) {
        console.error('Deu RUIM em USUARIO', erro)
        return
    }

    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
        if (erro1) {
            console.error('Deu RUIM em TELEFONE', erro1)
            return
        }

        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
            if (erro2) {
                console.error('Deu RUIM em ENDEREÇO', erro2)
                return
            }
    
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.numero}
            `)
        })
    })
})