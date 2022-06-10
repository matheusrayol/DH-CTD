package br.com.digitalhouse.codificacao.models;

public class Tecnico extends Funcionario {

    private double bonus;

    public Tecnico(String nome, double salario, double bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    @Override
    public double ganhoAnual() {
        return super.getSalario() * 12 + this.bonus;
    }

    @Override
    public String exibeDados() {
        return "Nome: " + super.getNome() + "\n" +
                "Salário: " + super.getSalario() + "\n" +
                "Ganho Anual: " + this.ganhoAnual();
    }
}
