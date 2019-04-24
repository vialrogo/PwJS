/*  Vamos agora a terminar nosso exercicio. Baseados no codigo anterior, vamos
    a fazer um programa que tenha duas partes. A primeira é parecida com o 
    exercicio anteior mas não mostra nada, ao invés disso, tem que salvar os
    dados de vazão num array.

    A segunda parte tem que mostrar a saida LENDO os dois vetores. É importante
    para fins do exercicio que exista no programa todo uma única instrução
    console.log

    A fórmula é: Q = a*(H + b)^c. Os parámetros são a = 9.9, b = -1.2, c = 1.07.
    O nível é: 2.290, 2.172, 1.989, 1.914, 1.867 e 1.862.
*/

// Primeira parte
var a = 9.9;
var b = -1.2;
var c = 1.07;

var H = [2.290, 2.172, 1.989, 1.914, 1.867, 1.862];
var Q = [0, 0, 0, 0, 0, 0];

for (var i = 0; i < 6; i++) {
    var h = H[i];
    var q = a*((h + b)**c);
    Q[i] = q;
}

// Segund parte
for (var i = 0; i < 6; i++) {
    console.log("Para " + H[i] + " a vazão é: " + Q[i]);
}