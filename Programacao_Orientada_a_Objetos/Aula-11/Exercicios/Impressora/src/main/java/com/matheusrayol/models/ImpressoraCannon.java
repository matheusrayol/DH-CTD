package com.matheusrayol.models;

public class ImpressoraCannon extends Impressora {

    public ImpressoraCannon(String modelo, String tipoConexao, int folhasDisponiveis, double porcentagemTinta) {
        super(modelo, tipoConexao, folhasDisponiveis, porcentagemTinta);
    }

    @Override
    public boolean precisaDeTinta() {
        if (this.getPorcentagemTinta() >= 0.2) {
            return false;
        }
        return true;
    }

    @Override
    public String imprimir() {
        if(!this.precisaDeTinta() && super.temPapel()) {
            super.deduzirTinta(0.2);
            super.deduzirPapel();
            return "Imprimindo...";
        }
        else if (this.precisaDeTinta()) {
            return "Não tem tinta";
        }
        return "Não tem papel";
    }
}
