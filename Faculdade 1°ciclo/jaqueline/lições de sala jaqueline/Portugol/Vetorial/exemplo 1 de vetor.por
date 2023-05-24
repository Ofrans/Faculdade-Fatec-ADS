programa
{
	
	funcao inicio()
	{
		inteiro vetor1[50],vetor2[50],cont
		real soma1, soma2, soma_todos
		soma1= 0.0
		soma2= 0.0
		soma_todos = 0.0
		
		para (cont = 0; cont < 50; cont++){
			escreva("Digite a ", cont+1, " ª ")
			leia(vetor1[cont])	
			soma1 = soma1 + vetor1[cont]
		}
		
		para (cont = 0; cont < 50; cont++){
			escreva("Digite a ", cont+1, " ")
			leia(vetor2[cont])	
			soma2 = soma2 + vetor2[cont]
		}
		soma_todos = soma1 + soma2
		escreva(" o resultado da soma é : ", soma_todos)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 316; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = vetor, matriz, funcao;
 */