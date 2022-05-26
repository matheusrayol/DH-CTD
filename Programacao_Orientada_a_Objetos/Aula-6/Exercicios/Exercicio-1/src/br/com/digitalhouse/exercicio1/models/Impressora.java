package br.com.digitalhouse.exercicio1.models;

import java.util.Date;

public class Impressora {
    private String modelo;
    private String tipoConexao;
    private Date dataFabricacao;
    private int folhasDisponiveis;

    public boolean temPapel() {
        return this.folhasDisponiveis>0;
    }

    public void imprimir(String texto) {
        if(temPapel()) {
            System.out.println("Texto");
        } else {
            System.out.println("Compre papel");
        }
    }
}
