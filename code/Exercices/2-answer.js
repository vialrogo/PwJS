/*  No exercicio 1 fizemos as contas e tudo parece ok, mas o código está
    muito grande e com coisas repetidas (ou isso eu imagino, se o seu está
    eficiente, parabéns!! :D ) Vamos dar um jeito de fazer isso usando arrays.

    A fórmula é: Q = a(H + b)^c. Os parámetros são a = 9.9, b = -1.2, c = 1.07.
    O nível é: 2.290, 2.172, 1.989, 1.914, 1.867 e 1.862. Crie um array com os
    valóres de nível e percorra ele com um loop. O objetivo e que exista uma 
    única fórmula escrita no programa, mas que ele mostre a saída para os 6
    valores.
*/

var a = 9.9;
var b = -1.2;
var c = 1.07;

var H = [2.290, 2.172, 1.989, 1.914, 1.867, 1.862];

for (var i = 0; i < 6; i++) {
    var h = H[i];
    var Q = a*((h + b)**c);
    console.log("Para " + h + " a vazão é: " + Q);
}