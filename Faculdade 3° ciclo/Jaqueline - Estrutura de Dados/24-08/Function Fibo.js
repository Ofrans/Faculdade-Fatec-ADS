var N = 7
function fibo(N){
    if((N == 1)||(N == 2)){
        return 1
    }
    else {
        return(fibo(N-1) + fibo(N-2))
    }
}

var result = fibo(N)
console.log(result)



