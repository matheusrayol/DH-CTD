nome = "Matheus"
print(nome)
nome = 36
print(nome)
verdade = True
print(verdade)
altura = 1.84
print(altura)
teste = verdade
print(teste)

lista_alunos = ["Matheus", "João", "Maria"]
lista_alunos.append("Pedro")

print(lista_alunos)
print(len(lista_alunos))

lista_alunos.remove("João")
print(lista_alunos)


dados_pessoais = {"nome": "Matheus", "idade": "18", "altura": "1.84"}

print(dados_pessoais["nome"])



idade = 9

if idade < 18:
    print("Menor de idade")
elif idade >= 18 and idade < 30:
    print("Adulto")
elif idade >= 30 and idade < 60:
    print("Adulto")
else:
    print("Idoso") 
