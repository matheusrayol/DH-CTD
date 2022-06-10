package br.com.digitalhouse.codificacao;

import br.com.digitalhouse.codificacao.models.Administrativo;
import br.com.digitalhouse.codificacao.models.Assistente;
import br.com.digitalhouse.codificacao.models.Tecnico;

public class Main {
    public static void main(String[] args) {

        Assistente assistente = new Assistente("João", 1200.0, 12345);
        System.out.println(assistente.exibeDados());

        Tecnico tecnico = new Tecnico("Maria", 2000.0, 300.0);
        System.out.println(tecnico.exibeDados());

        Administrativo administrativo = new Administrativo("Pedro", 3000.0, true, 300.0);
        System.out.println(administrativo.exibeDados());
    }
}