import pandas as pd
import random
from datetime import datetime, timedelta

# Lista de empresas fictícias
empresas = ["Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"]

# Lista de valores aleatórios maiores que R$ 1200,00
valores = [round(random.uniform(1200.01, 5000.00), 2) for _ in range(200)]

# Lista de tipos de cliente
tipos_cliente = ["TOP", "TRANQUILO", "CHATO"]

# Lista de cidades fictícias
cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Brasília", "Curitiba", "Salvador", "Recife"]

# Lista de estados fictícios
estados = ["SP", "RJ", "MG", "RS", "DF", "PR", "BA", "PE"]

# Data inicial a partir de 2008
data_inicial = datetime(2008, 1, 1)

# Lista de otimizado e avaliações no Google
otimizado = ["Sim", "Não"]
avaliacoes_google = ["Sim", "Não"]

# Criar uma lista com 200 linhas de dados fictícios
dados = []
for _ in range(200):
    empresa = random.choice(empresas)
    pago = random.choice(["Sim", "Não"])
    tipo_site = random.choice(["WooCommerce", "Standard", "WordPress + Blog", "WordPress"])
    valor = random.choice(valores)
    tipo_cliente = random.choice(tipos_cliente)
    cidade = random.choice(cidades)
    estado = estados[cidades.index(cidade)]
    data_contrato = data_inicial + timedelta(days=random.randint(0, 5475))  # 15 anos em dias
    otimizado_cliente = random.choice(otimizado)
    avaliacoes_google_cliente = random.choice(avaliacoes_google)

    dados.append([empresa, pago, tipo_site, valor, tipo_cliente, cidade, estado, data_contrato.strftime('%A, %d de %B de %Y'), otimizado_cliente, avaliacoes_google_cliente])

# Criar um DataFrame pandas com os dados e salvar em um arquivo CSV
df = pd.DataFrame(dados, columns=["Empresa", "Pago", "Tipo de Site", "VALOR", "Tipo de cliente", "Cidade", "Estado", "Inicio Contrato", "Otimizado", "3 avaliações no Google"])
df.to_csv("planilha_preenchida.csv", index=False)

print("Planilha preenchida e salva como 'planilha_preenchida.csv'.")
