# Enunciado para exercício preparatório sobre Divisão e Conquista

Implemente os dois algorítmos abaixo, atentando para os aspectos mencionados.

   * Implemente um método que implementa a contagem feita pelas recorrências abaixo;
   * Para cada uma delas, execute e teste para os valores propostos;
   * Para cada execução, teste para os valores indicados;
   * Indique, dadas as execuções, qual seria a complexidade assintótica dos algortimos representados pelas recorrências.

1. O Merge Sort é um algorítmo de ordenação baseado nos seguintes passos:
   * recursivamente ordene a metade esquerda do vetor
   * recursivamente ordene a metade diretita do vetor
   * mescle (faça o merge) das duas metades para ter o vetor ordenado.
  
  Assim:
  
   * implemente o algortimo abaixo;
   * teste-o para vetores de inteiros com conteúdos randômicos, e tamanho 32, 2048 e 1.048.576. Nestes testes, contabilize o número de iterações que o algoritmo executa, e o tempo gasto;
  
  ```java
  MERGE-SORT(L: List with n elements) : Ordered list with n elements
      IF (list L has one element)
          RETURN L.
      Divide the list into two halves A and B.
      A ← MERGE-SORT(A).
      B ← MERGE-SORT(B).
      L ← MERGE(A, B).
      RETURN L. 
  ```
  
  1. A Multiplicação Inteira de n-bits recebe dois números inteiros x e y de n-bits e retorna o resutado de x * y.
  
  Assim, novamente:
  
     * implemente o algortimo abaixo;
     * teste-o para os 3 casos de valores inteiros: com 4 bits, com 16 bits e com 128 bits. Nestes testes, contabilize o número de iterações que o algoritmo executa, e o tempo gasto.
  
  ```java
  MULTIPLY(x, y, n) 
     IF (n = 1)
        RETURN x * y.
     ELSE
        m ← ⎡ n / 2 ⎤.
        a ← ⎣ x / 2^m ⎦; b ← x mod 2^m.
     c ← ⎣ y / 2^m ⎦; d ← y mod 2^m.
     e ← MULTIPLY(a, c, m).
     f ← MULTIPLY(b, d, m).
     g ← MULTIPLY(b, c, m).
     h ← MULTIPLY(a, d, m).
     RETURN 2^(2m)*e + 2^m*(g + h) + f.
  ```
