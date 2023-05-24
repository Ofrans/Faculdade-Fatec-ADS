programa
{
	
	funcao inicio()
	{
		inteiro numero

		escreva("digite um numerero: ")
		leia(numero)

		se(numero % 2 == 0 e numero /3 == 0)
		{
			escreva("seu numero é par e divisivel por 3")
		
		}
		se(numero % 2 != 0 e numero / 3 == 0)
		{
			escreva("seu numero é impar e divisivel por 3")
		}
		se(numero % 2 != 0 e numero / 3 != 0)
		{
			escreva("seu numero é impar e não divisivel por 3")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 141; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */