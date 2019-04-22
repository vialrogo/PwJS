// Funções é um jeito de reusar código
function somaRuim(a, b){
    var c = a + b +1;
    console.log("A soma de " + a + " e " + b + " é " + c);
}

// Criar uma função não é usar ela imediatamente
// vamos usar nossa função

somaRuim(5, 7);

// As funções também podem retornar coisas
function somaBoa(a, b){
    var c = a + b;
    return c;
}

// E posso usar esse valor diretamente ou numa variável

var x = 3;
var y = 7;
var z = somaBoa(3, 7);

console.log("A soma boa de " + x + " e " + y + " é " + z)
console.log("A soma ruim de 8 e 9 é " + somaBoa(8, 9))
