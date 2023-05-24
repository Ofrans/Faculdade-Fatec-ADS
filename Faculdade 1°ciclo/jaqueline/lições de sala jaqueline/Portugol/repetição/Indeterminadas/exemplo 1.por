programa
{
	
	funcao inicio()
	{
		real media, acm, MediaTurma
		inteiro cont
		cont = 0
		acm = 0
		escreva("Digite a média do aluno: ")
		leia(media)
		enquanto (media != -1)
		{
				acm = acm + media
				cont = cont + 1
				escreva("Digite a média do aluno: ")
				leia(media)
		}
		se (cont == 0)
		{
				escreva("Nenhum aluno escrito")
		}
		senao
		{
				MediaTurma = acm/cont
				escreva("Média da turma = ", MediaTurma)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 432; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */