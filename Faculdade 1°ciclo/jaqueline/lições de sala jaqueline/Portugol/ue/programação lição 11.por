programa
{
inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
	real numero,unidade[2]
	
	escreva("Digite o número de 3 digitos: ")
	leia(numero)

	unidade[0] = numero / 10 %
	unidade[1] = (numero / 10) 10 %
	unidade[2] = (numero / 10) 10 %

	escreva("O resultado é : ",unidade[0],unidade[1].unidade[2])
	
	

	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 218; 
 * @PONTOS-DE-PARADA = 12;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */