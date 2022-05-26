package br.com.digitalhouse.adocaopet.modules;

public class AdocaoPet {
    private boolean estaApto;
    private String racaCachorro;
    private int anoNascimento;
    private double peso;
    private boolean possuiChip;
    private boolean estaFerido;
    private String nomeCachorro;

    public AdocaoPet(String nomeCachorro, String racaCachorro, int anoNascimento, double peso, boolean possuiChip, boolean estaFerido) {
        this.nomeCachorro = nomeCachorro;
        this.racaCachorro = racaCachorro;
        this.anoNascimento = anoNascimento;
        this.peso = peso;
        this.possuiChip = possuiChip;
        this.estaFerido = estaFerido;
        cachorroPodeSerAdotado();

    }

    public int obterIdadeCachorro() {
        return 2022 - anoNascimento;
    }

    public boolean cachorroPossuiChip() {
        return possuiChip;
    }

    public void cachorroPodeSerAdotado() {
        if(this.peso >= 5.00 && !this.estaFerido) {
            this.estaApto = true;
        } else {
            this.estaApto = false;
        }
    }

    public void checaApto() {
        if(estaApto) {
            System.out.println("Este cachorro pode ser adotado!");
        } else {
            System.out.println("Este cachorro não pode ser adotado...");
        }
    }

    public void imprimeDadosCachorro() {
        System.out.println("Nome do Cachorro: " + this.nomeCachorro);
        System.out.println("Idade do Cachorro: " + obterIdadeCachorro());
        System.out.println("Peso do Cachorro: " + this.peso + "kg");
        System.out.println("Possui Chip? " + cachorroPossuiChip());
        System.out.println("Está ferido? " + this.estaApto);
    }
}
