    function exe5(){
        somatorio()
    }

    function somatorio(){
        let N; let S = 0;
        N = Number(prompt('Informe o valor de N'))
        for(let i=1;i<=N;i++){
            S += i/(i*i)
        }
        console.log(`O Valor da somatória é: ${S}`)
    }