programa
{
	
	funcao inicio()
	{

		inteiro classi
		inteiro mam_class, mam_quadrupede, mam_bipede
		inteiro aves_class, aves_nao_voadoras
		inteiro reptel_class
		


		escreva("Qual classificação se enquadra no seu animal ?\n")
		escreva("1- Mamíferos \n")
		escreva("2- Aves \n")
		escreva("3- Repteis \n")
		leia(classi)
		limpa()

			se (classi == 1)
			{
				escreva("Seu mamífero se enquadra em qual categoria?\n")
				escreva("1- Quadrúpedes \n")
				escreva("2- Bipedes \n")
				escreva("3- Voadores \n")
				escreva("4- Aquáticos \n")
				leia(mam_class)
				limpa()
			
				se (mam_class == 1)	
				{
					escreva("Seu mamífero quadrupede se enquadra em qual categoria?\n")
					escreva("1- Carnivoro \n")
					escreva("2- Herbivoro \n")
					leia(mam_quadrupede)
					limpa()
				
					se (mam_quadrupede == 1)
					{
						escreva("Seu animal é o Leão\n\n\n")
						// para que o animal escolhido seja o leão // 
					}
					
					senao se (mam_quadrupede == 2)
					{
						escreva("Seu animal é o Cavalo\n\n\n")
						// para que o animal escolhido seja o Cavalo //
					}
					
					senao 
					{
						escreva("Animal Não catalogado")
						// Apontar erro //
					}
				}
				
				se (mam_class == 2)
				{
					escreva("Seu mamífero Bipede se enquadra em qual categoria?\n")
					escreva("1- Onivoro \n")
					escreva("2- Frutivoro \n")
					leia(mam_bipede)
					limpa()
				

					se (mam_bipede == 1)
					{
						escreva("Seu animal é o Homem")
						// para que o animal escolhido seja o homem //
					}
					
					senao se (mam_bipede == 2)
					{
						escreva("Seu animal é o Macaco")
						// para que o animal escolhido seja o Macaco //
					}
					
					senao 
					{
						escreva("Animal Não catalogado")
						// Apontar erro //
					}
					
				}
				
				se (mam_class == 3)
				{
					escreva("Seu animal é o Morcego\n")
					// para que o animal escolhido seja o morcego //
				}

				se (mam_class == 4)
				{
					escreva("Seu animal é a Baleia\n")
					// para que o animal escolhido seja a Baleia //
				}
			}

			senao se (classi == 2)
			{	
				escreva("Sua Ave se enquadra em qual categoria?\n")
				escreva("1- Não-Voadoras \n")
				escreva("2- Nadadoras \n")
				escreva("3- De rapina \n")
				leia(aves_class)
				limpa()
			
				se (aves_class == 1)
				{
					escreva("Sua Ave Não-Voadora se enquadra em qual categoria?\n")
					escreva("1- Tropicais \n")
					escreva("2- Polares \n")
					leia(aves_nao_voadoras)
					limpa()
				

					se (aves_nao_voadoras == 1 )
					{
						escreva("Seu animal é o Avestruz\n\n")
						// para que o animal escolhido seja o avestruz //
					}

					senao se (aves_nao_voadoras == 2)
					{
						escreva("Seu animal é o Pinguim\n\n")
						// para que o animal escolhido seja o Pinguim //
					}
					
					senao 
					{
						escreva("Animal Não catalogado")
						// Apontar erro //
					}
				}
				
				senao se (aves_class == 2)
				{
					escreva("Seu animal é o Pato\n\n")
					// para que o animal escolhido seja o Pato //
				}

				senao se (aves_class == 3)
				{
					escreva("Seu animal é a Águia\n\n")
					// para que o animal escolhido seja a Águia //
				}
				
				senao 
					{
						escreva("Animal Não catalogado")
						// Apontar erro //
					}
			}
			
			senao se (classi == 3)
				{	
					escreva("Seu Reptel se enquadra em qual categoria?\n")
					escreva("1- Com casco \n")
					escreva("2- Carnívoros \n")
					escreva("3- Sem Patas \n")
					leia(reptel_class)	
					limpa()
			

					se (reptel_class == 1)
					{
						escreva("Seu animal é a Tartaruga\n\n")
						// para que o animal escolhido seja a Tartaruga //
					}
				
					senao se (reptel_class == 2)
					{
						escreva("Seu animal é o Crocodilo\n\n")
						// para que o animal escolhido seja o Crocodilo //
					}

					senao se (reptel_class == 3)
					{
						escreva("Seu animal é a Cobra\n\n")
						// para que o animal escolhido seja a Cobra //
					}
					
					senao 
					{
						escreva("Animal Não catalogado")
						// Apontar erro //
					}
				}


			senao 
				{
					escreva("Animal Não catalogado")
					// Apontar erro //
				}
					
					
				

			

				

			 	
					

				
					
				 
				 
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2480; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */