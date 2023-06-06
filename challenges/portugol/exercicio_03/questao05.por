
programa {

    funcao inicio() {
        inteiro aprovado   = 0
        inteiro reprovado  = 0
        inteiro recuperacao = 0
        
        real media_classe = 0.0
        real aluno_media  = 0.0
        real aluno_nota1  = 0.0
        real aluno_nota2  = 0.0
        
        para (inteiro x = 1; x <= 8; x++ ) {
            escreva("digite a 1° nota do ",x,"° Aluno: ")
            leia(aluno_nota1)
                    
            escreva("digite a 2° nota do ",x,"° Aluno: ")
            leia(aluno_nota2)
            aluno_media = ((aluno_nota1+aluno_nota2)/2)
                    
             se ( aluno_media < 4 ) {
                 reprovado += 1
                 media_classe += aluno_media
                 escreva("A média do aluno foi: ",aluno_media," ;Aluno reprovado\n\n")
             }senao {
                 se ( aluno_media < 7 ) {
                     recuperacao += 1
                     media_classe += aluno_media
                     escreva("A média do aluno foi: ",aluno_media," ;Aluno em recuperação\n\n")
                 }senao {
                     aprovado += 1
                     media_classe += aluno_media
                     escreva("A média do aluno foi: ",aluno_media," ;Aluno aprovado\n\n")
                 }
              }   
         }
         
         escreva("\n-----------\n\n")
         escreva("Total de alunos aprovados......: ",aprovado,"\n")
         escreva("Total de alunos reprovados.....: ",reprovado,"\n")
         escreva("Total de alunos em recuperação.: ",recuperacao,"\n")
         escreva("Média da turma...: ",(media_classe/8),"\n")
         escreva("\n-----------\n")
    }
}
