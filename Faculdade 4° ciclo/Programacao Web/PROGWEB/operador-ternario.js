

let media = 8.3, resultado

if (media >= 6) {
    resultado = 'Aprovado'
}
else {
    resultado = 'Reprovado'
}

console.log({media, resultado})

// Usando operador ternário 
resultado = media >= 6 ? 'Aprovado' : 'Reprovado'  // Só da pra fazer if + else nessa condição

console.log({media, resultado})

let user = 'guest', msg

/*
  Quando há apenas uma linha depois de um if, um else, um while, etc., podemos omitir as chaves
*/
if(user === 'admin') msg = 'Seja bem-vindo(a)!'
else msg = 'Acesso negado'

console.log({user, msg})

// Equivalente usando operador ternário 
msg = user === 'admin' ? 'Seja bem vindo(a)' : 'Acesso negado' // faz a mesma coisa em 1 linha
console.log({user, msg})