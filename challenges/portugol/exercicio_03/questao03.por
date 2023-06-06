
programa {
    
    funcao inicio() {
        inteiro idade = 0
        inteiro pessoas_qtd_total = 1
        inteiro pessoas_qtd_50_anos = 0
        
        real altura = 0.0
        real altura_media = 0.0
        
        enquanto(1==1) {
            escreva("Digite a idade  da ",pessoas_qtd_total,"° pessoa: ")
            leia(idade)
            
            se (idade <= 0 ) { pare }
            
            escreva("Digite a altura da ",pessoas_qtd_total,"° pessoa: ")
            leia(altura)
            
            se ( idade > 50 ) {
                pessoas_qtd_50_anos += 1
                altura_media += altura
            }
            pessoas_qtd_total += 1
        }
        
        se ( pessoas_qtd_50_anos >= 2 ) {
            escreva("\n-----------\n")
            escreva("Há ",pessoas_qtd_50_anos," pessoas com mais de 50 anos\n")
            escreva("e a altura média dela(s) é: ",altura_media/pessoas_qtd_50_anos)
            escreva("\n-----------\n")
       } senao {
            escreva("\n-----------\n")
            escreva("Não há pessoas com mais de 50 anos; Logo não há dados para calcular a média !")
            escreva("\n-----------\n")
       }
    }
    
}