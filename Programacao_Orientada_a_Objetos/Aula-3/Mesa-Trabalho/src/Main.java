public class Main {

    static String listarNumerosPrimos(int quantidadeNumeros){
        int numerosEncontrados = 0;
        int numero = 2;
        String listaEncontrados = "";
        while (numerosEncontrados <= quantidadeNumeros) {
            if (numero % 2 != 0) {
                numerosEncontrados++;
                listaEncontrados += numero + " ";
            }
            numero++;
        }
        return "Quantidade de números primos solicitados: " + quantidadeNumeros + "\n" +
                "Números primos encontrados: " + listaEncontrados;
    }

    public static void main(String[] args) {
        System.out.println(listarNumerosPrimos(25));
    }
}