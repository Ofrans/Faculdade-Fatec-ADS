programa
{
	
	funcao inicio()
	{

		real n1,n2,n3,n4,media
		inteiro cont

		cont = 0
		enquanto (cont <50)
		{
				
				escreva("Notas: \n")
				leia(n1,n2,n3,n4)
				limpa()
				media = (n1 + n2 +n3 + n4) / 4
				se (media >=7)
				{	
						escreva("Aluno aprovado, Parabéns!\n")
						escreva("Sua média foi de : ", media,"\n")
				}
				senao 
				{
						escreva("Aluno Reprovado, Estude mais!\n")
						escreva("Sua média foi de : ", media,"\n")
				}

				cont = cont + 1
			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 146; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */