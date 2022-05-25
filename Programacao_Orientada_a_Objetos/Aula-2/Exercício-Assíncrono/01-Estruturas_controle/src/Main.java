import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Defina dois números inteiros e atribua um valor a cada um.
        // Verifique se o primeiro número é divisível pelo segundo e indique o resultado obtido por meio de uma mensagem
        int num1 = 10;
        int num2 = 3;
        if (num1 % num2 == 0) {
            System.out.println("O número " + num1 + " é divisível por " + num2);
        } else {
            System.out.println("O número " + num1 + " não é divisível por " + num2);
        }
    }
}