package br.com.digitalhouse.codificacao.models;

public class Assistente extends Funcionario {

    private int matricula;

    public Assistente(String nome, double salario, int matricula) {
        super(nome, salario);
        this.matricula = matricula;
    }

    @Override
    public double ganhoAnual() {
        return (super.getSalario() * 12);
    }

    @Override
    public String exibeDados() {
        return "Nome: " + super.getNome() + "\n" +
                "Salário: " + super.getSalario() + "\n" +
                "Matrícula: " + this.matricula + "\n" +
                "Ganho Anual: " + this.ganhoAnual();
    }
}
