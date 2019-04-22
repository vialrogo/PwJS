// Também suporta algumas operações especiais

var res3 =14 % 3  // Este é chamado módulo
console.log("res3 depois do modulo: " + res3);

res3++;
console.log("res3 depois do ++: " + res3);

res3--;
res3--;
console.log("res3 depois de dois --: " + res3);

// v++ equivale a dizer  v = v + 1
// v-- equivale a dizer  v = v - 1

// Mas tem um detalhe:
var x = 5;
var y = x++;        
console.log("x: " + x + "  y: " + y);

var x = 5;
var y = --x;        
console.log("x: " + x + "  y: " + y);
