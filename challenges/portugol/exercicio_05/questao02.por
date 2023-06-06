
programa {
	funcao inicio() {
		const inteiro COL = 3
		const inteiro LIN = 3
		
		caracter matrix[COL][LIN]
		
		para (inteiro y=0; y<COL; y++) {
		para (inteiro x=0; x<LIN; x++) {
			escreva("digite uma letra: ")
			leia(matrix[y][x])
		}}
		
		
		para (inteiro y=0; y<COL; y++) {
		para (inteiro x=0; x<LIN; x++) {
		     se ( x == ((LIN-1)-y) ) escreva(matrix[y][x])
		}}
		
	}
}