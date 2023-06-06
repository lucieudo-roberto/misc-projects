
programa {
	funcao inicio () {
        caracter letras[10]
		caracter vogais[] = {'a','e','i','o','u'}
		
		para ( inteiro x=0; x<10; x++ ) {
			escreva("Digite uma letra: ")
			leia(letras[x])
			
			para( inteiro y=0; y<5; y++) {
				se ( letras[x] == vogais[y] ) letras[x] = '*'
			}
		}
		
		para ( inteiro x=0; x<10; x++ ) {
			escreva(letras[x])
		}
		
		escreva("\n")
	}
}