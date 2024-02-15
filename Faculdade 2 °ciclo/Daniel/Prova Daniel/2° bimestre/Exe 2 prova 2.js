function exe2Prova2(){
    let matriz = []; site = []
    Cria_Matriz(matriz,site)
    media_notas(matriz)
    menor_nota(matriz,site)
}
function Cria_Matriz(matriz,site){
    for(let i=0;i<1;i++){
        let objSite = {
            nome: prompt('Informe o nome do site'),
            url: prompt('Informe o URl do site'),
            titulo: prompt('Informe o o titulo do site'),
        }
        site[i] = objSite
        matriz[i] = []
        for(let j=0;j<3;j++){
            matriz[i][j] = Number(prompt(`Informe a ${j+1} nota de avaliação do site`))
        }
    }
}
function media_notas(matriz,site){
    let media=[];soma=[];let menor = 0
    for(let i=0;i<4;i++){
        soma[i] = 0
        for(let j=0;j<3;j++){
            soma[i] += matriz[i][j]
        }  
    }
    for(let i=0;i<3;i++){
        media[i] = soma[i]/3
    }
    for (let i = 0; i < site.length; i++) {
        if (menor < media[i]) {
            menor = media[i]
        }
        console.log(`A média das notas do site ${site[i].nome} de url ${site[i].url} é ${media[i]}`)
    }
    console.log(`A menor média é ${menor}`)    
}
function menor_nota(matriz,site){
    let menor = 0
    for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
            if (menor > matriz[i][j]) {
                menor = matriz[i][j]
                // Atualizar o valor de 'menor' em vez de 'site[i].titulo'
            }
            
        }  
    }
    console.log(`Titulo com menor nota é ${menor}`)
}