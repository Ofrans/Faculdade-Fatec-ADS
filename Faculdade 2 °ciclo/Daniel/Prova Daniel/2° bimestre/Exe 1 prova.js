function exe1(){
    let opcao
    let clientes = []; let contas = [];
    let contador = []
    do{
        opcao = Number(prompt(`Digite \n 1. Cadastrar pessoa \n 2. Cadastrar ímovel \n 3. Valor total em Ímovel\n 4. CPF da pessoa que tem o ímovel mais caro \n 5. Sair`))
        switch(opcao){
            case 1: cadastraCliente(clientes)
                    break
            case 2: cadastraImovel(contas,clientes)
                    break
            case 3: valor_total(contas,clientes)
                    break
            case 4: mais_caro(contas,clientes)
                    break
            }
            
            
    }
    while (opcao != 5)
}
function cadastraImovel(contas,clientes){
    let objConta = {
        numero: contas.length,
        nroCliente: Number(prompt('Informe número do cliente')),
    }
    // verifica se existe
    let achou = false;
    for(let i=0;i<clientes.length;i++){
        if (objConta.nroCliente == clientes[i].numero){
            let objImovel = {
                codigo: Number(prompt('Informe código do ímovel')),
                endereco: prompt('Informe o enderço do ímovel'),
                tamanho: prompt('Informe o tamanho ímovel'),
                tipo: prompt('Informe o tipo do ímovel'),
                valor: prompt('Informe o valor do ímovel'),
                cpf: prompt('Informe CPF do dono'),
            }
            contas.push(objImovel)
            achou = true // encontrou
        }
    }
    if (!achou){ // não encontrou o cliente
        cadastraCliente(clientes)
    }
}
function cadastraCliente(clientes){
    let objCliente = {
        numero: prompt('Número do cliente'), // código do cliente é incremental
        nome: prompt('Nome do cliente'),
        telefone: prompt('Telefone do cliente'),
        endereco: prompt('Endereço do cliente')
    }
    clientes.push(objCliente)
}
function valor_total(contas,clientes){
    let soma = 0
    let cpf = prompt('Informe seu CPF')
    let achou = false
    for(let i=0;i<clientes.length;i++){
        if (cpf == contas[i].cpf){
            for(let i=0;i<contas.length; i++){
                soma += contas[i].valor
            }
            console.log(`O valor total em ímovel é ${soma}`)
            achou = true // encontrou
        }
    }
    if (!achou){ // não encontrou o cliente
        console.log('Não foi possível achar seu CPF')
    }
}
function mais_caro(contas,cliente){
    let maior = 0
    for(let i=0;i<contas.length; i++){
        if(maior<contas[i].valor){
            maior = contas[i].cpf
        }
    }
    console.log(`o CPF da pessoa que tem o ímovel mais caro é ${maior}`)
}
