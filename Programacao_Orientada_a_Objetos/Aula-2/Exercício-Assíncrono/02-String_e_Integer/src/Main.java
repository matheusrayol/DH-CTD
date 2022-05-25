import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Defina duas sequências de texto. Verifique se são iguais ou diferentes e indique por meio de mensagem.
        String text1 = "Oi";
        String text2 = "Oi";
        if (text1.equals(text2)) {
            System.out.println("As duas strings são iguais");
        } else {
            System.out.println("As duas strings são diferentes");
        }

        // Defina duas variáveis Integer e determine pelo valor delas qual é maior, qual é menor ou se são iguais.
        // Mostre o resultado obtido.
        Integer num3 = 10;
        Integer num4 = 3;
        if (num3 > num4) {
            System.out.println("O número " + num3 + " é maior que " + num4);
        } else if (num3 < num4) {
            System.out.println("O número " + num3 + " é menor que " + num4);
        } else {
            System.out.println("Os números são iguais");
        }
    }
}