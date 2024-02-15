function Exercicio4(){
    let nome = []
    let quantidade = []
    let classifica = []
    let molelo = []
    let qtd_compra = []
    let aux = [] 
    let clas_compra = []
    for(let i = 0; i < 10; i++){
        nome[i] = prompt(`Informe o nome do modelo do produto ${i+1}`)
        do{
            quantidade[i] = Number(prompt(`Informe a quantidade do produto ${i+1}`))
            if(quantidade[i] < 0){
                alert('Não existe estoque negativo, favor inserir valor correto da quantidade')
            }
        }
        while(quantidade >= 0)
        do{
            classifica[i] = Number(prompt(`Digite o número correspondente a classificação de seu produto\n 1 - Gamer\n 2 - Notebook\n 3 - Desktop\n\n DIGITE APENAS O NÚMERO CORRESPONDENTE`))
            if((classifica[i] == 1)){
                classifica[i] == gamer
            }
            else if((classifica[i] == 2)){
                classifica[i] == notebook
            }
            else if((classifica[i] == 3)){
                classifica[i] == desktop
            }
        }
        while((classifica != desktop) || (classifica != notebook) || (classifica != gamer))
    }
    alert('Agora vamos as compras!')
    for(let cont = 0; cont < 4; cont++){
        modelo[cont] = prompt(`Informe o modelo que deseja comprar ${cont+1}`)
        if(modelo[cont] == nome[0]){
            alert(`Este modelo (${nome[0]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[0]
        }
        else if(modelo[cont] == nome[1]){
            alert(`Este modelo (${nome[1]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[1]
        }
        else if(modelo[cont] == nome[2]){
            alert(`Este modelo (${nome[2]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[2]
        }
        else if(modelo[cont] == nome[3]){
            alert(`Este modelo (${nome[3]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[3]
        }
        else if(modelo[cont] == nome[4]){
            alert(`Este modelo (${nome[4]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[4]
        }
        else if(modelo[cont] == nome[5]){
            alert(`Este modelo (${nome[5]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[5]
        }
        else if(modelo[cont] == nome[6]){
            alert(`Este modelo (${nome[6]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[6]
        }
        else if(modelo[cont] == nome[7]){
            alert(`Este modelo (${nome[7]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[7]
        }
        else if(modelo[cont] == nome[8]){
            alert(`Este modelo (${nome[8]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[8]
        }
        else if(modelo[cont] == nome[9]){
            alert(`Este modelo (${nome[9]}) existe! vamos prosseguir com a compra`)
            aux[cont] = quantidade[9]
        }
        else{
            alert(`Este modelo (${modelo[i]}) Não existe! Não vamos prosseguir com a compra`)
                break
            }
        clas_compra[cont] = prompt(`Digite a classificação de seu produto`)
        if(clas_compra[cont] == classifica[0]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[0]
        }
        else if(clas_compra[cont] == classifica[1]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[1]
        }
        else if(clas_compra[cont] == classifica[2]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[2]
        }
        else if(clas_compra[cont] == classifica[3]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[3]
        }
        else if(clas_compra[cont] == classifica[4]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[4]
        }
        else if(clas_compra[cont] == classifica[5]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[5]
        }
        else if(clas_compra[cont] == classifica[6]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[6]
        }
        else if(clas_compra[cont] == classifica[7]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[7]
        }
        else if(clas_compra[cont] == classifica[8]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[8]
        }
        else if(clas_compra[cont] == classifica[9]){
            alert(`A classificação ${clas_compra[cont]} existe, vamos processeguir`)
            clas_compra[cont] = classifica[9]
        }
        else{
            alert(`A classificação ${clas_compra[cont]} Não existe, não vamos processeguir`)
            break
        }
        qtd_compra[cont] = prompt(`Digite a quantidade que deseja do produto`)
        if(qtd_compra[cont] == aux[cont]){
            alert('Quantidade válida')
            aux[cont]= aux[cont] - qtd_compra
        }
        else{
            alert('Quantidade invalida')
        }
    }
}