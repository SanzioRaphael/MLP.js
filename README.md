# Documentação da Biblioteca MLP.js
<sub>A classe MLP representa uma rede neural de camadas densas com uma camada de entrada, uma ou mais camadas ocultas e uma camada de saída. Esta implementação utiliza as funções de ativação ReLU e sigmoid. Esta classe também fornece métodos para treinamento da rede neural e previsão.</sub>
</br></br>
<h1>Construtor</h1>
<p>Construtor</p>
<p><sub><strong>MLP(inputLayer, hiddenLayers, outputLayer)</strong></sub></p>
</br>
<p><sub>Cria uma instância da classe MLP com a seguinte estrutura:</sub></p>
<p><sub><strong>inputLayer</strong>: número de neurônios na camada de entrada</sub></p>
<p><sub><strong>hiddenLayers</strong>: um inteiro ou um array de inteiros, representando o número de neurônios em cada camada oculta. Se for um inteiro, a rede neural terá uma única camada oculta com esse número de neurônios. Se for um array, a rede neural terá o número de camadas ocultas igual ao comprimento do array e o número de neurônios em cada camada será dado pelos elementos do array.</sub></p>
<p><sub><strong>outputLayer</strong>: número de neurônios na camada de saída</sub></p>
</br></br>
<h1>Métodos</h1>
<p><sub><strong>randomMatrix(rows, cols)</strong></sub></p>
<p><sub>Gera uma matriz rows x cols com valores aleatórios entre -1 e 1.</sub></p>
</br>
<p><sub><strong>matrixMultiply(a, b)</strong></sub></p>
<p><sub>Realiza a multiplicação de matrizes a x b e retorna o resultado.</sub></p>
</br>
<p><sub><strong>matrixAdd(a, b)</strong></sub></p>
<p><sub>Realiza a soma de matrizes a e b e retorna o resultado.</sub></p>
</br>
<p><sub><strong>sigmoid(x)</strong></sub></p>
<p><sub>Retorna o valor da função de ativação sigmoid aplicada ao valor x.</sub></p>
</br>
<p><sub><strong>relu(x)</strong></sub></p>
<p><sub>Retorna o valor da função de ativação ReLU aplicada ao valor x.</sub></p>
</br>
<p><sub><strong>train(input, target, learningRate, epochs)</strong></sub></p>
<p><sub>Realiza o treinamento da rede neural com base em um conjunto de dados de entrada input e de saída esperada target. learningRate define a taxa de aprendizado da rede e epochs define o número de épocas de treinamento. Durante o treinamento, a função realiza o cálculo dos gradientes e atualiza os pesos e bias da rede neural.</sub></p>
  </br>
<p><sub><strong>predict(input)</strong></sub></p>
<p><sub>Utiliza a rede neural treinada para fazer previsões com base em um conjunto de dados de entrada input. Retorna um array com as previsões correspondentes para cada entrada.</sub></p>
</br></br>
<h3>Exemplo:</h3></br>
<sub>vamos criar uma rede neural com 2 neurônios na camada de entrada, 3 neurônios na camada escondida e 1 neurônio na camada de saída.</sub>
</br></br>
<p><sub>const mlp = new MLP(2, [3], 1);</sub></p>
<p><sub>const input = [[0, 0], [0, 1]];</sub></p>
<p><sub>const target = [[0], [1]];</sub></p>
<p><sub>mlp.train(input, target, 0.1, 1000);</sub></p>
<p><sub>const input = [1, 0];</sub></p>
<p><sub>const output = mlp.predict(input);</sub></p>
<p><sub>console.log(output); // exibe a previsão para a entrada [1, 0]</sub></p>
