# Enunciado para exercício preparatório sobre Divisão e Conquista

1. Vamos começar com um algorítmo já estudado e conhecido (em AEDI). O Merge Sort é um algorítmo de ordenação baseado nos seguintes passos:

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
   
2. O algoritmo a seguir (que não utiliza divisão-e-conquista) encontra o maior valor em um vetor.

   ```java
   int maxVal1(int A[], int n) {  
       int max = A[0];
       for (int i = 1; i < n; i++) {  
           if( A[i] > max ) 
              max = A[i];
       }
       return max;
   }
   ```
   
  Assim, novamente:
  
    * implemente o algortimo abaixo;
    * teste-o para vetores de inteiros com conteúdos randômicos, e tamanho 32, 2048 e 1.048.576. Nestes testes, contabilize o número de iterações que o algoritmo executa, e o tempo gasto;
    
3. O algoritmo a seguir (que utiliza divisão-e-conquista) encontra o maior valor em um vetor.

   ```java
   int maxVal2(int A[], int init, int end) {  
       if (end - init <= 1)
           return max(A[init], A[end]);  
       else {
             int m = (init + end)/2;
             int v1 = maxVal2(A,init,m);   
             int v2 = maxVal2(A,m+1,end);  
             return max(v1,v2);
            }
   }
   ```
   
  Assim, novamente:
  
    * implemente o algortimo abaixo;
    * teste-o para vetores de inteiros com conteúdos randômicos, e tamanho 32, 2048 e 1.048.576. Nestes testes, contabilize o número de iterações que o algoritmo executa, e o tempo gasto;
    
4. Monte uma tabela com os resultados das execuções acima. As linhas da tabela são os algoritmos implementados, as colunas o tamanho dos vetores usados para testar e contabilizar.
