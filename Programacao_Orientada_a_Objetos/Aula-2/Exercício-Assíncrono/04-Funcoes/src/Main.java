public class Main {

    static boolean eDivisivel(int num, int divisor) {
        return num % divisor == 0;
    }

    static boolean eNumeroPrimo(int num) {
        int cont = 0;
        for (int i = 1; i <= num; i++) {
            if(eDivisivel(num, i)) {
                cont++;
            }
        }
        if (cont == 2) {
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(eDivisivel(10, 2));
        System.out.println(eNumeroPrimo(10));
    }
};
