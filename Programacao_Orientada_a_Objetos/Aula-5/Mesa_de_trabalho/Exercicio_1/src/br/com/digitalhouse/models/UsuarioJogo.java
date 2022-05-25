package br.com.digitalhouse.models;

public class UsuarioJogo {
    private String nome;
    private String nickname;
    private int pontuacao;
    private int nivel;

    public UsuarioJogo(String nome, String nickname) {
        this.nome = nome;
        this.nickname = nickname;
        this.pontuacao = 0;
        this.nivel = 0;
    }

    public void aumentarPontuacao() {
        this.pontuacao++;
    }

    public void subirNivel() {
        this.nivel++;
    }

    public void bonus(int valor) {
        this.pontuacao += valor;
    }

    public String getNome() {
        return nome;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public int getNivel() {
        return nivel;
    }

}
