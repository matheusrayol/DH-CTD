package com.matheusrayol.models;

public class ImpressoraEpson extends Impressora {

    public ImpressoraEpson(String modelo, String tipoConexao, int folhasDisponiveis, double porcentagemTinta) {
        super(modelo, tipoConexao, folhasDisponiveis, porcentagemTinta);
    }

    @Override
    public String imprimir() {
        if(!super.precisaDeTinta() && super.temPapel()) {
            super.deduzirTinta(0.1);
            super.deduzirPapel();
            return "Imprimindo...";
        }
        else if (super.precisaDeTinta()) {
            return "Não tem tinta";
        }
        return "Não tem papel";
    }

}
