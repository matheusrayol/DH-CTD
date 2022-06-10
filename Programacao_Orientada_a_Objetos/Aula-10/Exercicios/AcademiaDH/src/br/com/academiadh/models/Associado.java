package br.com.academiadh.models;

public class Associado {
    private String numAssociado;
    private String nome;
    private double valorMensal;
    private String atividade;

    public Associado(String numero, String nome, String atividade, double valor) {
        this.atividade = atividade;
        this.nome = nome;
        this.numAssociado = numero;
        this.valorMensal = valor;
    }

    public double custoMensal(){
        return valorMensal;
    }


}
