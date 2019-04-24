# coding: utf8
# Agora vamos para algo um pouco mais arriscado.
#
# Existe um arquivo chamado Rio_Atibaia_em_Atibaia.csv que contem os
# dados de nível horários para 7 dias do Rio Atibaia. Este arquivo
# precisa estar do lado do script com o código.
#
# Este arquivo já faz a leitura do csv e tranforma ele em vetores.
# Complete o arquivo na zona indicada, sabendo que já existem os
# vetores D e H com os dados. Os objetivos são:
#
# a) Mostre os primeiros 10 dados, data ao lado de valor
# b) Calcule o nível médio dos 7 dias
# c) Calcule o nível médio por dia
# d) Use os valores dos exercicios anteriores para calcular a vazão
# média por dia e dos 7 dias.
# e) Que acontece se fazemos a media das medias diárias?


# Incluo as bibliotecas que vamos usar
import csv

arquivo = 'Rio_Atibaia_em_Atibaia.csv'
D = []
H = []

# Função que lê o arquivo e retorna os dois vetores
with open(arquivo, 'r') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for idx, row in enumerate(csv_reader):
        if idx > 0:
            D.append(row[0])
            H.append(row[1])

H = map(float, H)

# a -----------------------------------------------------------------------
for i in range(10):
    print(D[i] + ' -> ' + str(H[i]))

# b -----------------------------------------------------------------------
Hm = sum(H)/len(H)
print(u'O nível médio do mês é ' + str(Hm))

# c -----------------------------------------------------------------------
Hs = []
for i in range(7):
    Hs.append(sum(H[24*i:24*(i+1)])/24)
    print(u'O nível médio para o dia ' + str(i+1) + u' é ' + str(Hs[i]))

# d -----------------------------------------------------------------------
a = 9.9
b = -1.2
c = 1.07

# dos 7 dias
Q = a*((Hm + b)**c)
print(u'A vazão média total é ' + str(Q))

# por dia
Qs = map(lambda h: a*((h + b)**c), Hs)
for i, e in enumerate(Qs):
    print(u'A vazão média para o dia ' + str(i+1) + u' é ' + str(e))

# e -----------------------------------------------------------------------
Qtd = sum(Qs)/len(Qs)
print(u'Quando calculada pela media das vazões diárias dá: ' + str(Qtd));
