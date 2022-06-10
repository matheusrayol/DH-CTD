package br.com.dh.exercicioguiado.models;

public class Secretaria extends Funcionario {

    public Secretaria(String nome, String sobrenome, String cpf, String email, String matricula, double salario) {
        super(nome, sobrenome, cpf, email, matricula, salario);
    }

    @Override
    public double pagamento() {
        return super.getSalario();
    }
}
