function exe2(){
    let matriz = []; car = []
    Cria_Matriz(matriz,car)
    media_notas(matriz)
    menor_nota(matriz,car)
}
function Cria_Matriz(matriz,car){
    for(let i=0;i<4;i++){
        objCarro = {
            modelo: prompt('Informe o modelo'),
            marca: prompt('Informe a marca'),
            valor: Number(prompt('Informe o valor')),
        }
        car[i] = objCarro
        for(let j=0;j<5;j++){
            nota = Number(prompt('Informe a nota do carro'))
            matriz[i][j] = nota
        }
    }
}
function media_notas(matriz){
    let media=[];soma=[];menor = media[0]
    for(let i=0;i<4;i++){
        for(let j=0;j<5;j++){
            soma[i] += matriz[i][j]
        }  
    }
    for(let i=0;i<4;i++){
        media[i] = soma[i]
        if (menor<media[i]){
            menor = media[i]
        }
        console.log(`A média das notas é ${media[i]}`)
        console.log(`A menor média é ${menor}`)
    }
}
function menor_nota(matriz,car){
    let menor = matriz[0][0]
    for(let i=0;i<4;i++){
        for(let j=0;j<1;j++){
            if(menor>matriz[i][j].nota){
                menor = car[i].modelo
            }
        }  
    }
    console.log(`Modelo com menor nota é ${menor}`)
}