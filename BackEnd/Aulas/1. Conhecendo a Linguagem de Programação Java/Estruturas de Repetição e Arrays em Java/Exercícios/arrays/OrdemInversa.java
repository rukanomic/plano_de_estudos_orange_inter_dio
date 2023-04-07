/*
Crie um vetor de 6 números inteiros
e mostre-os na ordem inversa.
 */

public class OrdemInversa {
    public static void main(String[] args) {
        int [] vetor = {2, -5, 6, -14, 17, -19};

        System.out.println("Vetor: ");
        int count = 0;
        while(count < (vetor.length)) {
            System.out.println(vetor[count] + " ");
            count++;
        }

        System.out.println("Vetor Invertido: ");
        for(int i = (vetor.length - 1); i >= 0; i--) {
            System.out.println(vetor[i] + " ");
        } 
    }
    
}
