package br.com.digitalhouse.meubanco;

import br.com.digitalhouse.meubanco.models.Cliente;

public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente(1, "Matheus");
        cliente.aumentarDivida(10000);
    }
}