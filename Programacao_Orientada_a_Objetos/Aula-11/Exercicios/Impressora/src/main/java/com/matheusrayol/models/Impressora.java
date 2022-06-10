package com.matheusrayol.models;

import java.util.Date;

public abstract class Impressora {
    private String modelo;
    private String tipoConexao;
    private Date dataFabricacao;
    private int folhasDisponiveis;
    private double porcentagemTinta;

    public Impressora(String modelo, String tipoConexao, int folhasDisponiveis, double porcentagemTinta) {
        this.modelo = modelo;
        this.tipoConexao = tipoConexao;
        this.folhasDisponiveis = folhasDisponiveis;
        this.porcentagemTinta = porcentagemTinta;
    }

    public boolean temPapel() {
        if (this.folhasDisponiveis > 0) {
            return true;
        }
        return false;
    }

    public boolean precisaDeTinta() {
        if (this.porcentagemTinta > 0) {
            return false;
        }
        return true;
    }

    public void deduzirPapel() {
        this.folhasDisponiveis--;
    }

    public void deduzirTinta(double quantidade) {
        this.porcentagemTinta -= quantidade;
    }

    public double getPorcentagemTinta() {
        return this.porcentagemTinta;
    }

    public abstract String imprimir();
}
