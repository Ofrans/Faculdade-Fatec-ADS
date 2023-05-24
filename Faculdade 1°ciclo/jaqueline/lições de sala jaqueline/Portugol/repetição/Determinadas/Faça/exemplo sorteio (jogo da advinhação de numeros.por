programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro numero_pensado, chute, tentativas

		tentativas = 1
		
		numero_pensado = u.sorteia(1,10)
		
		
		
		faca
		{
		escreva("Digite o seu chute (De 1 a 10)\n")
		leia(chute)
		limpa()
		se (chute < numero_pensado)
				{
					escreva("Seu chute foi baixo\n\n\n")
					tentativas = tentativas + 1
					
				}
				se (chute > numero_pensado)
				{
					escreva("seu chute foi alto\n\n\n\n")
					tentativas = tentativas + 1
					
				}
				se (chute == numero_pensado)
				{
					escreva("Parabéns você acertou o numero imaginado\n")
					escreva("o numero de tentativas foi de: ", tentativas, "\n\n\n")
				}
	
		
		}
			enquanto (chute != numero_pensado)
			
				
			
		
		

			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 168; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */