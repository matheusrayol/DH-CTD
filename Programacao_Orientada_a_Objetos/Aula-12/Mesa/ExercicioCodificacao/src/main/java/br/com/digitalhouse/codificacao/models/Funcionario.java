package br.com.digitalhouse.codificacao.models;

public abstract class Funcionario {

    private String nome;
    private double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public void addAumento(double valor) {
        this.salario += valor;
    }

    public double getSalario() {
        return this.salario;
    }

    public String getNome() {
        return this.nome;
    }

    public abstract double ganhoAnual();

    public abstract String exibeDados();
}
