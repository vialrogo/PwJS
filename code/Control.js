var num1 = 5;

// Um if é uma instrução que permite controlar
// se um código vai ser executado ou não
console.log("Algo que acontece antes");

if(num1 == 5){
    console.log("Meu número é igual a 5");
}

console.log("Algo que acontece depois");


// Também posso dizer uma coisa OU outra
if(num1 == 5){
    console.log("Meu número é igual a 5");
}
else{
    console.log("Meu número é diferente de 5");
}


// Ou que alguma coisa é diretamente diferente
if(num1 != 5){
    console.log("Meu número é diferente de 5");
}


// Tenho outros comparadores
if(num1 > 5){
    console.log("Meu número é maior a 5");
}

if(num1 < 5){
    console.log("Meu número é menor a 5");
}

if(num1 >= 5){
    console.log("Meu número é maior ou igual a 5");
}

if(num1 <= 5){
    console.log("Meu número é menor ou igual a 5");
}


// Posso fazer também uma comparação mais profunda
if(num1 == "5"){
    console.log("Com um string também funciona!!");
}

if(num1 === "5"){
    console.log("Se quero que seja exatamente igual (valor E tipo)");
}
else{
    console.log("Não é exatamente igual");
}


// Finalmente tenho o resto da logica booleana
var num2 = 7;
if(num1 == 5 && num2 ==7){
    console.log("num1 == 5 && num2 ==7");
}
if(num1 == 9 || num2 ==7){
    console.log("num1 == 9 || num2 ==7");
}
if(num1 == 5 || num2 ==2){
    console.log("num1 == 5 || num2 ==2");
}
if(!(num1 == 9)){
    console.log("!(num1 == 9)");
}
