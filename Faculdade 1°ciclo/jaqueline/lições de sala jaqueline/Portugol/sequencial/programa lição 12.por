programa
{
inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real vp, ac, valor, preju

		escreva(" Digite o valor da prestação: ")
		leia(vp)
		limpa()


		ac = vp + (vp * 0.10)
		valor = mat.arredondar(ac - (ac * 0.10), 2)
		preju = mat.arredondar(vp - valor, 2)

		escreva("O valor a ser pago é: ",valor,"\n\n\nE seu prejuizo foi de : ", preju,"\n\n\n\n\n\")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 386; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */