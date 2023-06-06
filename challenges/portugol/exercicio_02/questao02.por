programa
{
	
	funcao inicio()
	{
		inteiro soma_media=0
		inteiro numero=0
		inteiro valor_media=0

		para ( inteiro x=1; x<=10; x++ ) {
			escreva("digite o ",x,"°", " numero: ")
			leia(numero)

			se ((numero%2) != 0) {
				valor_media++
				soma_media += numero
			}
		}
        escreva("\n---------\n")
		escreva("\na soma dos N° impares foi ",soma_media," e a média é ",(soma_media/valor_media))
	}
}

