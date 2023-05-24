programa
{
	//feito por fransergio de paula morato filho//
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
	real graus_f,celsius
		
		escreva("Digite a Temperatura em °F  ")
		leia(graus_f)
		celsius = (graus_f - 32) * (0.555555556)
		escreva("A temperatura em Farenheit é de  ",graus_f,"°F\n")
		escreva("A temperatura em Celsius é de aproximadamente  ",mat.arredondar(celsius,2),"°C\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 0; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */