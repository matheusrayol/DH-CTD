package br.com.mesatrabalho.arcade.models;

public class Nave extends Objeto {
    private double velocidade;
    private int vida;

    public Nave(int posx, int posy, char direcao, double velocidade) {
        super(posx, posy, direcao);
        this.velocidade = velocidade;
    }


}
