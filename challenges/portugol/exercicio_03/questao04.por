
programa {
    inclua biblioteca Util
    
    funcao inicio() {
       inteiro f1=0,f2=0,f3=0
       inteiro f4=0,f5=0,f6=0
       inteiro faces_pares = 0
       inteiro dado_face = 0
       
       para (inteiro x = 1; x <= 150; x ++) {
       
           dado_face = Util.sorteia(1,6)
           
           escolha( dado_face ) {
               caso 1:
                   f1 += 1
               pare
               
               caso 2:
                   f2 += 1
                   faces_pares += 1
               pare
               
               caso 3:
                   f3 += 1
               pare
               
               caso 4:
                   f4 += 1
                   faces_pares += 1
               pare
               
               caso 5:
                   f5 += 1
               pare
               
               caso 6:
                   f6 += 1
                   faces_pares += 1
               pare
           }
       }
       
       escreva("\n\n-----------\n")
       escreva("o 1° lado foi sorteado ", f1, " vezes\n")
       escreva("o 2° lado foi sorteado ", f2, " vezes\n")
       escreva("o 3° lado foi sorteado ", f3, " vezes\n")
       escreva("o 4° lado foi sorteado ", f4, " vezes\n")
       escreva("o 5° lado foi sorteado ", f5, " vezes\n")
       escreva("o 6° lado foi sorteado ", f6, " vezes\n")
       escreva("\n\nO percentual da 3° face foi: ",(f3/150.0)*100," %\n")
       escreva("A quantidade de números pares foi: ", faces_pares, "\n")
       escreva("-----------\n")
    }
}