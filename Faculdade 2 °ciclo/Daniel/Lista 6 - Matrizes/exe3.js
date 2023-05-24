function exe3(){
    let mat = []
    // entrada de dados
    for (let i=0;i<6;i++){
        mat[i] = [] // cria um valor dentro da matriz
        for (let j=0;j<3;j++){
            mat[i][j] = Number(prompt(`Informe elemento da posição ${i+1} x ${j+1}`))
        }
    }
    // calcula o maior e menor números
    let maior = mat[0][0]; let lmaior = 0; let cmaior = 0;
    let menor = mat[0][0]; let lmenor = 0; let cmenor = 0;
    for(let i=0;i<6;i++){
        if(mat[i][j] > maior){
            maior = mat[i][j]; lmaior = i; cmaior = j
        }
        if(mat[i][j] < menor){
            maior = mat[i][j]; lmenor = i; cmenor = j
        }
    }
    alert(`Maior: ${maior} na posição ${lmaior + 1} x ${cmaior + 1}`)
    alert(`Menor: ${menor} na posição ${lmenor + 1} x ${cmenor + 1}`)
}