# Enunciado para exercício preparatório sobre Divisão e Conquista

Implemente os dois algorítmos abaixo, atentando para os aspectos mencionados.

* Implemente um método que implementa a contagem feita pelas recorrências abaixo;
* Para cada uma delas, execute e teste para os valores propostos;
* Para cada execução, teste para os valores indicados;
* Indique, dadas as execuções, qual seria a complexidade assintótica dos algortimos representados pelas recorrências.

1 O Merge Sort é um algorítmo de ordenação baseado nos seguintes passos:
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
  RETURN L. ]
  ```
