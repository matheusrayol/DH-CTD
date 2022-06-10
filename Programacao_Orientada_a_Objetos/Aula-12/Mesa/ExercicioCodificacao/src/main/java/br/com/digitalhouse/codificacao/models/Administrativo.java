package br.com.digitalhouse.codificacao.models;

public class Administrativo extends Funcionario {

    private boolean turno;
    private double adicionalNoturno;

    public Administrativo(String nome, double salario, boolean turno, double adicionalNoturno) {
        super(nome, salario);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }

    @Override
    public double ganhoAnual() {
        if (turno) {
            return super.getSalario() * 12 + adicionalNoturno;
        } else {
            return super.getSalario() * 12;
        }
    }

    @Override
    public String exibeDados() {
        if (turno) {
            return "Nome: " + super.getNome() + "\n" +
                    "Salário: " + super.getSalario() + "\n" +
                    "Adicional Noturno: " + adicionalNoturno + "\n" +
                    "Ganho Anual: " + this.ganhoAnual();
        } else {
            return "Nome: " + super.getNome() + "\n" +
                    "Salário: " + super.getSalario() + "\n" +
                    "Ganho Anual: " + this.ganhoAnual();
        }
    }
}
