package br.com.digitalhouse;

import br.com.digitalhouse.models.UsuarioJogo;

public class Main {
    public static void main(String[] args) {
        UsuarioJogo usuariojogo1 = new UsuarioJogo("Matheus", "Matheus");
        usuariojogo1.aumentarPontuacao();
        usuariojogo1.subirNivel();

        UsuarioJogo usuariojogo2 = new UsuarioJogo("Paula", "Paula");
        usuariojogo2.aumentarPontuacao();
        usuariojogo2.bonus(3);
        usuariojogo2.subirNivel();
        usuariojogo2.subirNivel();
        usuariojogo2.subirNivel();

        System.out.println("Usuário: " + usuariojogo1.getNome() + " Pontuação: " + usuariojogo1.getPontuacao() + " Nível: " + usuariojogo1.getNivel());
        System.out.println("Usuário: " + usuariojogo2.getNome() + " Pontuação: " + usuariojogo2.getPontuacao() + " Nível: " + usuariojogo2.getNivel());
    }
}