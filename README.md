# CRONOMETRO-web-design
Descrição do projeto:

Acesse o link e teste o projeto:
Esse código é um cronômetro que você pode iniciar, pausar e parar. Ele é implementado com JavaScript e HTML. O cronômetro é exibido em uma caixa de texto na tela.
Quando você clica no botão "iniciar", o cronômetro começa a contar e a exibir os segundos na caixa de texto. Se você clicar no botão "pausar", o cronômetro para de contar e a contagem é salva. Se você clicar novamente em "pausar", o cronômetro continua a contar a partir do ponto em que parou. Se você clicar em "parar", o cronômetro para completamente e a caixa de texto é limpa.
O código usa algumas variáveis para controlar o cronômetro. Há uma variável chamada "invtervalo" que armazena um intervalo de tempo. Isso permite que o cronômetro seja atualizado a cada 100 milissegundos. Há também variáveis para armazenar o tempo que passou desde que você clicou em "iniciar", o tempo que passou desde que você clicou em "pausar", o tempo total que passou desde que você iniciou o cronômetro e uma variável booleana chamada "rodando" que indica se o cronômetro está funcionando ou não.
O código é organizado em três funções principais: "iniciar", "pausar" e "parar". A função "iniciar" começa o cronômetro e redefine as variáveis. A função "pausar" pausa o cronômetro e salva o tempo decorrido. A função "parar" para o cronômetro e limpa a caixa de texto. Há também uma função chamada "iniciaCronometro" que atualiza o cronômetro a cada 100 milissegundos.
Finalmente, há uma função chamada "formataMs" que converte milissegundos em um formato mais fácil de ler. Se o tempo for inferior a um segundo, a função retorna o valor em milissegundos. Se o tempo for inferior a um minuto, a função retorna o valor em segundos e milissegundos. Se o tempo for superior a um minuto, a função retorna o valor em minutos, segundos e milissegundos.

Para desenvolver esse projeto eu utilizei: HTML5 e JAVASCIRPT

