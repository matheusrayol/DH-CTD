package br.com.academiadh.models;

public class AssociadoHabilitado extends Associado {
    private double custoPiscina;
    private boolean habilitado;

    public AssociadoHabilitado(String numero, String nome, String atividade, double valor, double custoPiscina) {
        super(numero, nome, atividade, valor);
        this.custoPiscina = custoPiscina;
        this.habilitado = true;
    }

    @Override
    public double custoMensal() {
        if (this.habilitado) {
            return super.custoMensal() + this.custoPiscina;
        } else {
            return super.custoMensal();
        }
    }
}
