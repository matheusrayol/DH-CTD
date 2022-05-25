import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Escreva um programa Java que solicite um nome e um sobrenome separadamente, e a partir dessas variáveis,
        // você deve obter uma terceira variável que contenha as iniciais de cada nome. Imprima o nome, o sobrenome e as
        // iniciais no console.
        String nome;
        String sobrenome;
        String iniciais;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite seu nome: ");
        nome = scanner.nextLine();
        iniciais = String.valueOf(nome.charAt(0));
        System.out.println("Digite seu sobrenome: ");
        sobrenome = scanner.nextLine();
        iniciais = iniciais + String.valueOf(sobrenome.charAt(0));
        //String iniciais = nome.substring(0, 1) + sobrenome.substring(0, 1);
        System.out.println("Nome: " + nome + "\nSobrenome: " + sobrenome + "\nIniciais: " + iniciais);
    }
}