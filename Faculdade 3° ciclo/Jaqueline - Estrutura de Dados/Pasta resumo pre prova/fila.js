// Suponha que você tenha uma fila representada por um array em JavaScript. A operação Serve remove o elemento no início da fila, e Empty verifica se a fila está vazia.

    //  A operação Clear pode ser implementada esvaziando a fila repetidamente até que ela esteja vazia. Aqui está um exemplo de como você poderia fazer isso:

    var fila = []
    var x
    x = 7 //entrada
    fila.push(x)
    fila.push(1)
    fila.push(2)
    console.log("Fila: " + fila)
    x = fila.shift()
    console.log("elemento: " + x)
    console.log("Fila: " + fila)
    
    // Neste exemplo, a função clearQueue utiliza as operações serve e isEmpty para esvaziar a fila até que ela esteja vazia. 
    // Certifique-se de adaptar o código conforme necessário para a estrutura de dados específica que você está utilizando.