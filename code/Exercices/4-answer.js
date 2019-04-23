/*  Agora vamos para algo um pouco mais arriscado.

    Primeiro vamos a instalar uns pacotes extra para o processamento de
    arquivos csv. Para isso abrimos um cmd (ou powershell) e instalamos
    os módulos com o comando:

        npm install fs csv-parser

    Existe um arquivo chamado Rio_Atibaia_em_Atibaia.csv que contem os
    dados de nível horários para 7 dias do Rio Atibaia. Este arquivo
    precisa estar do lado do script com o código.

    Este arquivo já faz a leitura do csv e tranforma ele em vetores.
    Complete o arquivo na zona indicada, sabendo que já existem os
    vetores D e H com os dados. Os objetivos são:

    a) Mostre os primeiros 10 dados, data ao lado de valor
    b) Calcule o nível médio dos 7 dias
    c) Calcule o nível médio por dia
    d) Use os valores dos exercicios anteriores para calcular a vazão
    média por dia e dos 7 dias.
    e) Que acontece se fazemos a media das medias diárias?
*/

// Incluo as bibliotecas que vamos usar
const fs = require('fs'); 
const csv = require('csv-parser');

var D = new Array();
var H = new Array();

// Função que lê o arquivo e retorna os dois vetores
function lerArquivoCSV(nomeArquivo, callback) {
    fs.createReadStream(nomeArquivo)
    .pipe(csv())
    .on('data', function(csvrow){
        try {
            D.push(csvrow.Data);
            H.push(csvrow.Nivel);
        }
        catch(err) {
            console.log("Alguma coisa estranha aconteceu... :(");
        }
    })
    .on('end', () => {
        callback();
    });
}

// Chamo a função com o nome do arquivo e pego os dados
var nomeArquivo = "Rio_Atibaia_em_Atibaia.csv";
lerArquivoCSV(nomeArquivo, mainCode);

// Aqui vamos incluir o código principal
function mainCode()
{
    // a -----------------------------------------------------------------------
    for (var i = 0; i < 10; i++) {
        console.log(D[i] + " -> " + H[i]);
    }

    // b -----------------------------------------------------------------------
    var Htotal = 0;
    for (var  i = 0; i < 168; i++) {
        Htotal += parseFloat(H[i]);
    }
    var Hmedia = Htotal/168
    console.log("O nível médio do mês é " + Hmedia);

    // c -----------------------------------------------------------------------
    var Hs = [0, 0, 0, 0, 0, 0, 0];
    for (var  i = 0; i < 7; i++) {
        var soma = 0;
        for (var j = 0; j < 24; j++) {
            soma += parseFloat(H[24*i + j]);
        }
        Hs[i] = soma/24;
        console.log("O nível médio para o dia " + (i+1) + " é " + Hs[i]);
    }

    // d -----------------------------------------------------------------------
    var a = 9.9;
    var b = -1.2;
    var c = 1.07;

    // dos 7 dias
    var Q = a*((Hmedia + b)**c);
    console.log("A vazão média total é " + Q);

    // por dia
    var Qs = [0, 0, 0, 0, 0, 0, 0];
    var soma = 0;
    for (var i = 0; i < 7; i++) {
        Qs[i] = a*((Hs[i] + b)**c);
        console.log("A vazão média para o dia " + (i+1) + " é " + Qs[i]);
    }

    // e -----------------------------------------------------------------------
    var somaQdiaria = 0;
    for (var i = 0; i < 7; i++) {
        somaQdiaria += Qs[i];      
    }
    var QTotalDiarias = somaQdiaria/7;
    console.log("Quando calculada pela media das vazões diárias dá: " + QTotalDiarias);
}