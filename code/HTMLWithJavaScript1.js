function codigo(){
    var paragrafo = document.createElement("P");
    var texto = document.createTextNode("Texto novo");
    paragrafo.appendChild(texto);
    document.body.appendChild(paragrafo); 
}
