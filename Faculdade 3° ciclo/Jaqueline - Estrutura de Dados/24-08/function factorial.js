var num = 2000

function fatorial(num){
    if(num == 0){
        return 1
    }
    else {
        return (num * fatorial(num-1))
    }
}

var result = fatorial(num)
console.log(result)