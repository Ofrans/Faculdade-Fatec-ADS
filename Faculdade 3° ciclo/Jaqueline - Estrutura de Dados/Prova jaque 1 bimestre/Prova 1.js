let n = 4

function f2(n){

    if (n == 0)

        return 1

    if (n == 1)

        return 2

    else

        return(f2(n-1)+ 2 * f2(n-2))

}

saida = f2(n)
console.log(saida)