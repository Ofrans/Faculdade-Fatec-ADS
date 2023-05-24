programa
{
inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real a,b,c,x1,x2

		escreva("Escreva o valor de A: ")
		leia(a)

	     escreva("Escreva o valor de B: ")
		leia(b)

		escreva("Escreva o valor de c: ")
		leia(c)
		limpa()

		x1 = (-b + (mat.raiz(b*b-4*a*c,2))) / (2.0*a)
		x2 = (-b - (mat.raiz(b*b-4*a*c,2))) / (2.0*a)


		

		
		escreva("O seu resultado foi: ",x1, " ou de ",x2)
		
		

	
		

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 249; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */