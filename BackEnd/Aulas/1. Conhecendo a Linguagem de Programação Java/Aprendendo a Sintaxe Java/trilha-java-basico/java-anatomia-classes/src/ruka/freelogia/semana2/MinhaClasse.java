package ruka.freelogia.semana2;

public class MinhaClasse {
    
public static void main (String [] args) {
    String primeiroNome = "Ruka";
    String segundoNome = "Freelogia";

    String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);

    System.out.print (nomeCompleto);
}

public static String nomeCompleto (String primeiroNome, String segundoNome) {
    return " Resultado do método " + primeiroNome.concat(" ").concat(segundoNome);

}

}
