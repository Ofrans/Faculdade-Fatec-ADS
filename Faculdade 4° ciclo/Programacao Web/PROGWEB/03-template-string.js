let nome = 'Valcicleide'
let idade = 20
let cidade = 'Morro Alto de cima/MG'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')

// Usando template string 
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`) // usando Template String

// Dentro de uma template string, não estamos limitados a usar apenas variáveis 
// Dentro do símbolo ${}. Na verdade, qualquer código JS válido pode ser usado ali.
console.log(`DAQUI A CINCO ANOS, ${nome.toLocaleUpperCase()} TERÁ ${idade + 5} ANOS.`)