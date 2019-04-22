var contador = 0;

function codigo(){
    var paragrafo = document.createElement("P");
    var texto = document.createTextNode("agora eu conto! " + contador);
    paragrafo.appendChild(texto);
    document.body.appendChild(paragrafo); 
    contador++;
}
