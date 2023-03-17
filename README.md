# Documentação da Biblioteca MLP.js
<sub>A classe MLP representa uma rede neural de camadas densas com uma camada de entrada, uma ou mais camadas ocultas e uma camada de saída. Esta implementação utiliza as funções de ativação ReLU e sigmoid. Esta classe também fornece métodos para treinamento da rede neural e previsão.</sub>
</br></br>
<h1>Construtor</h1>
<p>Construtor</p>
<p><sub>MLP(inputLayer, hiddenLayers, outputLayer)</sub></p>
</br>
<p><sub>Cria uma instância da classe MLP com a seguinte estrutura:</sub></p>
</br>
<p><sub><strong>inputLayer</strong>: número de neurônios na camada de entrada</sub></p>
<p><sub><strong>hiddenLayers</strong>: um inteiro ou um array de inteiros, representando o número de neurônios em cada camada oculta. Se for um inteiro, a rede neural terá uma única camada oculta com esse número de neurônios. Se for um array, a rede neural terá o número de camadas ocultas igual ao comprimento do array e o número de neurônios em cada camada será dado pelos elementos do array.</sub></p>
<p><sub><strong>outputLayer</strong>: número de neurônios na camada de saída</sub></p>
</br></br>
