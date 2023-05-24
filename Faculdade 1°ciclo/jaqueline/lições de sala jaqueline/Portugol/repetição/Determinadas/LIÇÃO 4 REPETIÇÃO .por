programa
{
	
	funcao inicio()
	{

		inteiro cont, tabuada,numero_usuario
		
		
		

		tabuada = 0

		faca
		{
			limpa()
			escreva("Digite o numero que sera feita a tabuada\n")
					leia(numero_usuario)
					limpa()

			se (numero_usuario != -1)
			para (cont = 0; cont <= 10; cont++)
			{
				tabuada = cont * numero_usuario
				escreva(numero_usuario," x ",cont, " = ",tabuada,"\n")			
			}	
			senao
			{
				escreva("Programa fechado, adeus!!!\n\n\n\n")
			}
			
		}
		enquanto(numero_usuario != -1)
		
			
			
		
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 503; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */