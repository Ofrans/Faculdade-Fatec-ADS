programa
{

	// iago e fransergio fizeram juntos
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real  km_antes, km_dps, volume_combus, preco_combust, gasto_combus,rendimento,preco_km_rodado
		inteiro cont
		cadeia nome

		
		para(cont = 0; cont <= 10; cont++){

			escreva("Qual seu nome ?  ")
			leia(nome)
			escreva("Quantos quilomentros rodados antes de viagem:   ")
			leia(km_antes)
			escreva("Quantos quilomentros rodados depois de viagem:   ")
			leia(km_dps)
			escreva("Volume de combustivel consumido (Litros):   ")
			leia(volume_combus)
			escreva("Qual o preço do combustivel : ")
			leia(preco_combust)
			gasto_combus = volume_combus * preco_combust
			rendimento = (km_dps - km_antes) /  volume_combus 
			preco_km_rodado = gasto_combus / (km_dps - km_antes)
			escreva("\nSenhor(a)  ", nome)
			escreva("\nSeu gasto de combustivel é de: R$ ", gasto_combus)
			escreva("\nO rendimento do seu carro é de: ",mat.arredondar(rendimento,2)," KM/L")
			escreva("\nO preco do seu quilometro rodado é de: R$ ", preco_km_rodado,"\n\n") 
		}
	
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