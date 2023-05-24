#include <stdio.h>
#include <stdlib.h>
#include <conio.h>




int main()
{
   float turma, nome,nota1, nota2, nota3, nota4, media;
   nota1 = nota2 = nota3 = nota4 = media = 0;

   printf("**********************************\n");
   printf("*Curso de Suporte Hardware e Rede*\n");
   printf("*    Prova de Linguagem C        *\n");
   printf("**********************************\n");
   printf("\n\n\nQual sua Turma?\t");
   scanf("%f", &turma);
   printf("\n\n\nNome Completo do Aluno:\t");
   scanf("%f", &nome);
   printf("\n\n*********************************************************\n");
   printf("*Algoritmo = Nota Final do Aluno <Modulo de Programacao>*\n");
   printf("*********************************************************\n");
   fflush(stdin);
   printf("Nota do 1>\t");
   scanf("%f", &nota1);
   printf("\nNota do 2>\t");
   scanf("%f", &nota2);
   printf("\nNota do 3>\t");
   scanf("%f", &nota3);
   printf("\nNota do 4>\t");
   scanf("%f", &nota4);
   printf("\n\n*************************");

   media = (nota1 + nota2 + nota3 + nota4) /4;

   printf("\n\n*A Media do Aluno e: %f *", media);
   printf("\n\n*************************");
   if(media >= 7)
   {
       printf( "\nVoce foi aprovado!");

    }else{
       printf( "\nVoce foi reprovado!");
    }
     return 0;
}







