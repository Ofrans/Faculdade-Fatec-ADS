programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		inteiro nota[50],cont,media_acima, media_abaixo
		real soma, media

		soma = 0 
		media_acima = 0
		media_abaixo = 0
		
		para(cont = 0; cont <50; cont++){
			escreva("Digite a ", cont, "ª nota do aluno ")
			leia(nota[cont])
			soma = soma + nota[cont]
		}
		media = soma / 3
		para (cont = 0; cont <50; cont++){
			se (nota[cont] > media+(media*0.10)){
				media_acima = media_acima + 1
			}
			senao se (nota[cont] < media+(media*0.10)){
				media_abaixo = media_abaixo + 1
			}
		}
		escreva("\nA media da sala é : ",mat.arredondar(media, 2))
		escreva("\nTotal de alunos com nota 10% acima da média foi de: ",media_acima)
		escreva("\nTotal de alunos com nota 10% abaixo da média foi de: ", media_abaixo)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 719; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */