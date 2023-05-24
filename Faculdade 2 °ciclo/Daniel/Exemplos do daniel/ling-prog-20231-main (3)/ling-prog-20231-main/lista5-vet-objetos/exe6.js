function cadastraCliente(clientes){
    let objCliente = {
        numero: prompt('Número do cliente'), // código do cliente é incremental
        nome: prompt('Nome do cliente'),
        telefone: prompt('Telefone do cliente'),
        endereco: prompt('Endereço do cliente')
    }
    clientes.push(objCliente)
}
function cadastraConta(contas,clientes){
    let objConta = {
        numero: contas.length,
        nroCliente: Number(prompt('Informe número do cliente')),
        saldo: Number(prompt('Saldo da conta'))
    }
    // verifica se o cliente existe
    let achou = false
    for(let i=0;i<clientes.length;i++){
        if (objConta.nroCliente == clientes[i].numero){
            contas.push(objConta)
            achou = true // encontrou
        }
    }
    if (!achou){ // não encontrou o cliente
        let objCliente = {
            numero: objConta.nroCliente, // código do cliente é incremental
            nome: prompt('Nome do cliente'),
            telefone: prompt('Telefone do cliente'),
            endereco: prompt('Endereço do cliente')
        }
        clientes.push(objCliente)
        contas.push(objConta)
    }
}
function listasContas(contas){
    let tabelaContas = ""
    for(let i=0;i<contas.length;i++){
        tabelaContas = tabelaContas + `<tr><td> ${contas[i].numero} </td> <td> ${contas[i].nroCliente} </td> <td> ${contas[i].saldo} </td> </tr>` 
    }
    document.getElementById("tabelaContas").innerHTML = tabelaContas
}
function listasClientes(clientes){
    let tabelaClientes = ""
        for(let i=0;i<clientes.length;i++){
            tabelaClientes = tabelaClientes + `<tr><td> ${clientes[i].numero} </td> <td> ${clientes[i].nome} </td> <td> ${clientes[i].telefone} </td> <td> ${clientes[i].endereco} </td></tr>` 
        }
        document.getElementById("tabelaClientes").innerHTML = tabelaClientes              
}
function exe6(){
    let opcao
    let clientes = []; let contas = [];
    do{
        opcao = Number(prompt(`Digite \n 1. Criar cliente \n 2. Criar conta \n 3. Listar contas \n 4. Listas clientes \n 5. Sair`))
        switch(opcao){
            case 1: cadastraCliente(clientes)
                    break
            case 2: cadastraConta(contas,clientes)
                    break
            case 3: listasContas(contas)
                    break
            case 4: listasClientes(clientes)
                    break
            }
    }
    while (opcao != 5)
}