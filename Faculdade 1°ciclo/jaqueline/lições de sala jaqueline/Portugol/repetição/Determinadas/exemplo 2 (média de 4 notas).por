programa
{
	
	funcao inicio()
	{

		real n1,n2,n3,n4,media,MediaTurma,acm
		inteiro cont

		cont = 0
		acm = 0
		enquanto (cont <50)
		{
			escreva("Digite a média do aluno: ")
			leia(media)
			acm = acm + media
			cont = cont + 1
		
				
				
		}
		MediaTurma = acm / 50
		escreva("Média da turma = ", MediaTurma)
		se (MediaTurma <= 7)
		{
				escreva("Turma com nota abaixo da média")
		}
		senao
		{
			se (MediaTurma = 7)
			{
				escreva("Turma com nota na média")
			}
			senão
			{
				se(MediaTurma > 7)
				{
						escreva("Turma com nota acima da média")
				}
			}
				
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 572; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */