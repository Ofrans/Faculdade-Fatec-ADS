programa
{
//codigo feito por fransergio de paula morato filho
	
	funcao inicio()
	{
	inteiro cont
	real media,faltas
		para(cont = 0; cont <= 15; cont++){
			escreva("Qual foi a média do aluno  ")
			leia(media)
			escreva("Quantas faltas o Aluno teve  ")
			leia(faltas)
			se (media >= 6 e faltas <= 20){
				escreva("Aluno aprovado\n\n")
			}
			senao{
				se (media < 6 e faltas > 20){
					escreva("Aluno reprovado devido a nota e faltas\n\n")
				}
				se (media >= 6 e faltas > 20){
					escreva("Aluno reprovado devido ao excesso de faltas\n\n")
				}
				se (media < 6 e faltas <= 20){
					escreva("Aluno reprovado por media baixa\n\n")
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
 * @POSICAO-CURSOR = 51; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */