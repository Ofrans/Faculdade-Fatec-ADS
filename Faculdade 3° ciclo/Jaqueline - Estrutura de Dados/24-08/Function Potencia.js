var N = 6
var expoente = 2
function potencia(N,expoente){
    if(expoente == 1){
        return N
    }
    else {
        return (N * potencia(N,expoente-1))
    }
}

var result = potencia(N,expoente)
console.log(result)



