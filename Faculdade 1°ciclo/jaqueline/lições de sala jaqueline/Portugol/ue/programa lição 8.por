programa
{
	inclua biblioteca Matematica --> mat

	funcao inicio()
	{
		real distancia,x1,x2,y1,y2,potenciaX,potenciaY

		escreva("Digite o valor da primeira coordenada (x1): ")
		leia(x1)

		escreva("Digite o valor da primeira coordenada (y1): ")
		leia(y1)

		escreva("Digite o valor da primeira coordenada (x2): ")
		leia(x2)

		escreva("Digite o valor da primeira coordenada (y2): ")
		leia(y2)

		potenciaX = mat.potencia(x2-x1, 2.0)
		potenciaY = mat.potencia(y2-y1, 2.0)
		distancia = mat.raiz((potenciaX + potenciaY),2.0)

		escreva("A distancia dos pontos são: ",mat.arredondar(distancia,3))
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 600; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */