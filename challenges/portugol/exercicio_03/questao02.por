
programa {

	funcao inicio () {
		inteiro fator_a = 3
		inteiro fator_b = 5
		inteiro produto = 0
		
		escreva("Digite o 1° fator: ")
		leia(fator_a)
		
		escreva("Digite o 2° fator: ")
		leia(fator_b)
		
		para (inteiro x=1; x<=fator_a; x++) {
			produto += fator_b
		}
		
		escreva("\n-----------\n")
		escreva("\n",fator_a," x ",fator_b," = ",produto)
		escreva("\n-----------\n")
	}
}