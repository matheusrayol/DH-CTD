package com.mesadetrabalho.dh.models;

public class Cachorro extends Animal {

    public Cachorro(String nome, int idade) {
        super(nome, idade);
    }

    @Override
    public String somAnimal() {
        return "Au-au";
    }

    @Override
    public String movimentoAnimal() {
        return ">>>>";
    }

}
