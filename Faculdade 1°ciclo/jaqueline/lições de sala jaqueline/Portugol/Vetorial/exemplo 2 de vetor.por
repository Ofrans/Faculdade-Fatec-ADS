programa
{
	
	funcao inicio()
	{
		inteiro nota[10], cont ,nota_acima
		real media,soma

		nota_acima = 0
		soma = 0
		para (cont = 0; cont < 10; cont++){
			escreva("Digite a ", cont+1, " ª nota : ")
			leia(nota[cont])
			se (nota[cont] > 10 ou nota[cont] < 0){
				escreva("Usuário burro, escreva direito\n")
				escreva("Digite a ", cont+1, " ª nota : ")
				leia(nota[cont])		
			}
			soma = soma + nota[cont]
		}
		media = soma / 10
		para (cont = 0; cont < 10; cont++){
			se (nota[cont] > media){
				nota_acima = nota_acima + 1
			}
		}
		escreva("Media : ", media, "\n")
		escreva("Quantidade: ",nota_acima)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 121; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = vetor, matriz, funcao;
 */