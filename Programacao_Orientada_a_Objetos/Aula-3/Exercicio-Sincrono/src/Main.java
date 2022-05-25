import java.util.Scanner;

public class Main {

    static void quantosPacotes(String nomeDoPet, double quilosPorDia) {
        Scanner scanner = new Scanner(System.in);
        int quantidadePacotes = 0;
        double totalQuilosRecebidos = 0.0;
        double quilosRecebidos = 0.0;

        while (totalQuilosRecebidos < quilosPorDia) {
            System.out.println("Digite o peso do pacote recebido: ");
            quilosRecebidos = scanner.nextDouble();
            totalQuilosRecebidos += quilosRecebidos;
            quantidadePacotes++;
        }

        System.out.println("O " + nomeDoPet + " recebeu " + quantidadePacotes + " pacotes.");
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o nome do pet: ");
        String nomeDoPet = scanner.nextLine();
        System.out.println("Digite a quantidade de quilos por dia: ");
        double quilosPorDia = scanner.nextDouble();
        quantosPacotes(nomeDoPet, quilosPorDia);
    }
}