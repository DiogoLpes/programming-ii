1. Instalar Dependências
Primeiro, você precisa instalar as dependências necessárias (node-fetch e minimist). Execute o seguinte comando no terminal:

npm install node-fetch minimist

2. Para executar o Script
Para executar o script, use o comando node passando os argumentos --country (código do país) e --year (ano). Por exemplo:

node index.js --country PT --year 2025


Argumentos:
--country ou -c: Código do país (ex: PT para Portugal, US para Estados Unidos).

--year ou -y: Ano (padrão: ano atual).

-Exemplo de Saída
Se você executar o script com --country PT --year 2025, a saída será algo como:

Public Holidays in PT for 2025:
- New Year's Day (Wednesday, Jan 1, 2025)
- Good Friday (Friday, Apr 18, 2025)
- Easter Sunday (Sunday, Apr 20, 2025)
- Freedom Day (Friday, Apr 25, 2025)
- Labour Day (Thursday, May 1, 2025)
...

#Explicação do Código

 O node-fetch para fazer requisições HTTP e o minimist para processar argumentos da linha de comando.

#Processamento de Argumentos:

-O minimist analisa os argumentos passados na linha de comando.
-Define aliases (-c para --country e -y para --year).
-Define o ano atual como valor padrão para --year.

#Função fetchHolidays:

-Constrói a URL da API com os parâmetros necessários (api_key, country, year).
-Faz a requisição à API e processa a resposta.
-Exibe os feriados formatados no console.

#Validação de Argumentos:

-Verifica se os argumentos --country e --year foram fornecidos.
-Caso contrário, exibe uma mensagem de erro e um exemplo de uso.

#Tratamento de Erros:
-Captura e exibe erros de rede ou de processamento.

#Requisitos
-Node.js instalado.
-Chave de API válida do Calendarific.