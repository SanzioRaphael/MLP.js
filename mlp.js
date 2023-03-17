class MLP {
constructor(inputLayer, hiddenLayers, outputLayer) {
this.inputLayer = inputLayer;
this.hiddenLayers = hiddenLayers;
this.outputLayer = outputLayer;
this.weights = [];
this.biases = [];
for(let i = 0; i <= hiddenLayers; i++) {
if(i == 0) {
this.weights[i] = this.randomMatrix(inputLayer, hiddenLayers);
this.biases[i] = this.randomMatrix(1, hiddenLayers);
} else if(i == hiddenLayers) {
this.weights[i] = this.randomMatrix(hiddenLayers, outputLayer);
this.biases[i] = this.randomMatrix(1, outputLayer);
} else {
this.weights[i] = this.randomMatrix(hiddenLayers, hiddenLayers);
this.biases[i] = this.randomMatrix(1, hiddenLayers);
}
}
}

// Função que gera uma matriz com valores aleatórios
randomMatrix(rows, cols) {
let matrix = [];
for(let i = 0; i < rows; i++) {
matrix[i] = [];
for(let j = 0; j < cols; j++) {
matrix[i][j] = Math.random() * 2 - 1;
}
}
return matrix;
}

// Função que realiza a multiplicação de matrizes
matrixMultiply(a, b) {
let result = [];
for(let i = 0; i < a.length; i++) {
result[i] = [];
for(let j = 0; j < b[0].length; j++) {
let sum = 0;
for(let k = 0; k < a[0].length; k++) {
sum += a[i][k] * b[k][j];
}
result[i][j] = sum;
}
}
return result;
}

// Função que realiza a soma de matrizes
matrixAdd(a, b) {
let result = [];
for(let i = 0; i < a.length; i++) {
result[i] = [];
for(let j = 0; j < a[0].length; j++) {
result[i][j] = a[i][j] + b[i][j];
}
}
return result;
}

// Função de ativação sigmoid
sigmoid(x) {
return 1 / (1 + Math.exp(-x));
}

// Função de ativação ReLU
relu(x) {
return Math.max(0, x);
}

// Função que realiza o treinamento da rede neural
train(input, target, learningRate, epochs) {
for(let epoch = 0; epoch < epochs; epoch++) {
let nabla_w = [];
let nabla_b = [];
for(let i = 0; i <= this.hiddenLayers; i++) {
nabla_w[i] = this.randomMatrix(this.weights[i].length, this.weights[i][0].length);
nabla_b[i] = this.randomMatrix(this.biases[i].length, this.biases[i][0].length);
}
for(let k = 0; k < input.length; k++) {
let x = input[k];
let y = target[k];
let zs = [];

    let activations = [x];
    
    // Forward propagation
    for(let i = 0; i <= this.hiddenLayers; i++) {
      let z;
      if(i == this.hiddenLayers) {
        z = this.matrixMultiply(activations[i], this.weights[i]);
      } else {
        z = this.matrixAdd(this.matrixMultiply(activations[i], this.weights[i]), this.biases[i]);
      }
      zs[i] = z;
      let a = z.map(row => row.map(this.relu));
      if(i == this.hiddenLayers) {
        a = a.map(row => row.map(this.sigmoid));
      }
      activations.push(a);
    }
    
    // Backpropagation
    let delta = this.matrixMultiply(
      this.matrixAdd(activations[this.hiddenLayers + 1], this.matrixMultiply(y, -1)),
      this.matrixMultiply(activations[this.hiddenLayers + 1], this.matrixAdd(1, this.matrixMultiply(activations[this.hiddenLayers + 1], -1)))
    );
    nabla_w[this.hiddenLayers] = this.matrixMultiply(this.matrixTranspose(activations[this.hiddenLayers]), delta);
    nabla_b[this.hiddenLayers] = delta;
    for(let i = this.hiddenLayers - 1; i >= 0; i--) {
      let delta = this.matrixMultiply(this.matrixMultiply(delta, this.matrixTranspose(this.weights[i + 1])), this.matrixAdd(1, this.matrixMultiply(zs[i], -1)));
      nabla_w[i] = this.matrixMultiply(this.matrixTranspose(activations[i]), delta);
      nabla_b[i] = delta;
    }
    
    // Atualização dos pesos e bias
    for(let i = 0; i <= this.hiddenLayers; i++) {
      this.weights[i] = this.matrixAdd(this.weights[i], this.matrixMultiply(nabla_w[i], -learningRate));
      this.biases[i] = this.matrixAdd(this.biases[i], this.matrixMultiply(nabla_b[i], -learningRate));
    }
  }
}


// Previsão - utiliza a rede neural treinada para fazer previsões
predict(input) {
let activations = [input];
for(let i = 0; i <= this.hiddenLayers; i++) {
let z;
if(i == this.hiddenLayers) {
z = this.matrixMultiply(activations[i], this.weights[i]);
} else {
z = this.matrixAdd(this.matrixMultiply(activations[i], this.weights[i]), this.biases[i]);
}
let a = z.map(row => row.map(this.relu));
if(i == this.hiddenLayers) {
a = a.map(row => row.map(this.sigmoid));
}
activations.push(a);
}
return activations[this.hiddenLayers + 1];
}

// Função que realiza a transposição de uma matriz
matrixTranspose(matrix) {
let result = [];
for(let j = 0; j < matrix[0].length; j++) {
result[j] = [];
for(let i = 0; i < matrix.length; i++) {
result[j][i] = matrix[i][j];
}
}
return result;
}
}