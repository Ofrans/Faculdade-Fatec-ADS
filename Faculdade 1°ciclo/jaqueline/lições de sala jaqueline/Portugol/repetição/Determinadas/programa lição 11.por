programa
{ 

	
	funcao inicio()
	{
	inteiro in1,in2,in3,numero,divisao
		escreva("insira um numero de 3 digitos: ")
		leia(numero)
		limpa()

		in1 = numero % 10 
		divisao = numero /10
		in2 = divisao % 10
		in3 = divisao / 10
		


		escreva("O inverso do seu numero é: ", in1,in2,in3,"\n\n\n\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 309; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */