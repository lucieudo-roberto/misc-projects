programa
{
	
	funcao inicio()
	{
		inteiro maior = 0
		inteiro menor = 111
		inteiro numero
		
		para ( inteiro x=1; x<=10; x++) {
			 
            escreva("digite o ",x,"° numero: ")
			leia(numero)

			se ( numero >= maior ) {maior = numero}
			se ( numero <= menor ) {menor = numero}
		}
        
		escreva("\n------\n")
		escreva("o maior é: ", maior,"\n")
		escreva("o menor é: ", menor,"\n")
	}
}