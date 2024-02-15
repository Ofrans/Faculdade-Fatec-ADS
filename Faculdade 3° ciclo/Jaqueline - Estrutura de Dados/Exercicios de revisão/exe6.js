    function exe6(){
        fibo()
    }

    function fibo(){
        let N; let vetor = []
        N = Number(prompt('Quantos elementos terão?'))
        vetor[1] = 1
        vetor[2] = 1
        for(let i=3;i<=N;i++){
            vetor[i] = vetor[i-2] + vetor[i-1]
        }
        for(let i=1;i<=N;i++){
            console.log(`${vetor[i]}`)
        }
    }
