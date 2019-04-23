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
    console.log(D);
    console.log(H);


    // É aqui que vai seu código


}