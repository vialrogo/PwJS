/*  Vamos começar devagar.
    Para o primeiro exercicio, vamos calcuar uma vazão. Uma fórmula muito usada para
    a vazão é: Q = a(H + b)^c. Vamos supor para este caso a = 9.9, b = -1.2, c = 1.07.

    Vamos supor que a gente mediu o nível médio de 6 dias, dando os valores: 2.290, 
    2.172, 1.989, 1.914, 1.867 e 1.862. Fazer um programa que calcule a vazão Q para
    as medições de nível e mostre ela na tela
*/

var a = 9.9;
var b = -1.2;
var c = 1.07;

var H = 2.290;
var Q = a*((H + b)**c);
console.log("Para " + H + " a vazão é: " + Q);

H = 2.172;
Q = a*((H + b)**c);
console.log("Para " + H + " a vazão é: " + Q);

H = 1.989;
Q = a*((H + b)**c);
console.log("Para " + H + " a vazão é: " + Q);

H = 1.914;
Q = a*((H + b)**c);
console.log("Para " + H + " a vazão é: " + Q);

H = 1.867;
Q = a*((H + b)**c);
console.log("Para " + H + " a vazão é: " + Q);

H = 1.862;
Q = a*((H + b)**c);
console.log("Para " + H + " a vazão é: " + Q);