programa
{
	
	funcao inicio()
	{

		real media,nota[2]
		cadeia nome
		

		escreva("Escreva seu nome completo: ")
		leia(nome)
		limpa()
		

		escreva("Digite a primeira nota: ")
		leia(nota[0])
		limpa()

	
		
		escreva("Digite a segunda nota: ")
		leia(nota[1])
		limpa()

		media = ((nota[0]*2) + (nota[1]*1))/3.0
		
		
	
			
		

		escreva("Parabens \r",nome,"\r Sua media foi de: ", media,"\n")
		

		

		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 316; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */