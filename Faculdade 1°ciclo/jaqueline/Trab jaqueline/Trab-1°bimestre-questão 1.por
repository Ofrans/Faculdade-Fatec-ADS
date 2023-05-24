programa
{

	// iago e fransergio fizeram juntos
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real lado1,lado2,lado3, perimetro, area, volume, diagonal

		escreva("Digite o valor dos lados do seu paralelepipedo\n")
		leia(lado1,lado2,lado3)

		perimetro = 4 * lado1 + 4 * lado2 + 4 * lado3
		area = 2 * lado1 * lado2 + 2 * lado1 * lado3 + 2 * lado2 * lado3
		volume = lado1 * lado2 * lado3
		diagonal = mat.raiz( lado1*lado1 + lado2*lado2 + lado3*lado3,2)

		escreva("\nO Perimetro do Paralelepipedo é de: ",perimetro)
		escreva("\nA Area do Paralelepipedo é de: ",area)
		escreva("\nO Volume do Paralelepipedo é de: ",volume)
		escreva("\nA Diagonal do Paralelepipedo é de: ",mat.arredondar(diagonal, 2),"\n\n")
		
		
		
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 48; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */