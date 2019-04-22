// Os array são conjuntos de dados ordenados
var arr1 = ['A', 'B', 'C', 'D'];

// Vamos ver o que ele mostra
console.log(arr1);

// JavaScript leva a conta dos elementos do array,
// mas começa a conta em 0. Ou seja, o arr1 tem os
// elementos A, B, C e D nas posições 0, 1, 2 e 3
console.log(arr1[2]);

// Podemos também modificar o valor de um array
arr1[2] = 'Z';
console.log(arr1);

// Podemos facilmente adicionar ao final dum array
arr1.push('W');
arr1.push('Y');
console.log(arr1);

// Também podemos eliminar um conjunto de elementos
var indice = 2; 
var numElementos = 2; 
arr1.splice(indice, numElementos);
console.log(arr1);

// Um array pode conter coisas de diferentes tipos
arr2 = [1, 2, 'oi'];
console.log(arr2);
