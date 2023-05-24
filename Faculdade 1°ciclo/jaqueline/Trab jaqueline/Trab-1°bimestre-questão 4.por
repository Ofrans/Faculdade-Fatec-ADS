programa
{
	// iago e fransergio fizeram juntos	
	funcao inicio()
	{
		inteiro numero, antecessor1, soma, antecessor2

		escreva("Digite um numero : \n")
		leia(numero)
		
		soma = 0
		antecessor1 = 1
		antecessor2 = 1	
		escreva(antecessor1, " ", antecessor2, " ")
		enquanto(antecessor1 + antecessor2 <= numero){
				soma = antecessor1 + antecessor2
				antecessor1 = antecessor2
				antecessor2 = soma
				escreva(soma," ")				
			}
	
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 47; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */