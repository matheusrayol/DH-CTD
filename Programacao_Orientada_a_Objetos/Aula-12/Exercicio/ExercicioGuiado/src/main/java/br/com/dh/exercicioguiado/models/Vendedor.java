package br.com.dh.exercicioguiado.models;

public class Vendedor extends Funcionario {

    private double comissao;
    private double bonusMeta;

    public Vendedor(String nome, String sobrenome, String cpf, String email, String matricula, double salario, double comissao, double bonusMeta) {
        super(nome, sobrenome, cpf, email, matricula, salario);
        this.comissao = comissao;
        this.bonusMeta = bonusMeta;
    }

    @Override
    public double pagamento() {
        if (this.comissao >= 100) {
            return super.getSalario() + this.bonusMeta + this.comissao;
        }
        return super.getSalario() + this.comissao;
    }
}
