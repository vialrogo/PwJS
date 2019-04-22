// Os laços de repetição  permitem realizar sequências
// repetitivas fácil e rapidamente. Ao invés de
// escrever muitas coisas, expressamos tudo com lógica
//
// WARNING: Temos que garantir que o ciclo para!!!

var num1 = 5;
while(num1 > 0){
    console.log("O valor de num1 neste ponto é: " + num1);
    num1--;
}

// Para os laços de repetição (para a linguagem todo na
// verdade) é muito útil ler o código que está escrito
// "como se fosse português"

// O que faz este código?
var num2 = 10;
while(num2 > 0){
    console.log("O valor de num2 neste ponto é: " + num2);

    if(num2%3 == 0){
        console.log("Quando me imprimem?");
    }

    num2--;
}


// É normal que os laços de repetição tenham uma 
// variável para contar quantas vezes são feitos.
// Por isso foi criado o laço for

for (i = 0; i < 8; i++){
    console.log("i: " + i);
}

// Que acontece se um laço não termina?
