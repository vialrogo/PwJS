// Podemos simplificar e dizer que um objeto é
// um array no qual cada coisa tem nome

var obj1 = {nome : "Pepe",
            idade : 40,
            gostaFutebol : false};

// Posso mostrar o conteudo do objeto
console.log(obj1);

// Também posso mostrar só alguma das coisas
console.log(obj1.nome);
console.log(obj1.gostaFutebol);

// Objetos são legais para guardar informação 
// diferente junta
var obj2 = {nome : "Arnold",
            idade : 70,
            gostaFutebol : true};

var objetos = [obj1, obj2];

// Que teria que sair aqui?
// console.log(objetos[1].nome)
