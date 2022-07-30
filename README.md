# API-Cinema-da-Resilia

## Como instalar:

* Abra seu terminal e cole o seguinte comando na pasta de sua preferência:

```
git clone https://github.com/mirnatetzner/API-Cinema-da-Resilia.git
```

* Navegue até a pasta do projeto com o seguinte comando:

```
cd API-Cinema-da-Resilia
```

* Instale as dependencias necessárias com o seguinte comando:

```
npm i
```

* Inicie o projeto rodando o comando:

```
npm start
```

## Exemplo de rotas:
### Post: url/sala

Objeto de requisição:
<br>

```json
{
    "cadeiras_comuns": 250,
    "cadeiras_namoradeiras": 6,
    "espaços_cadeirantes": 4,
    "certificado_de_vistoria_anual": true,
    "categoria_da_sala": "imax"
}
```
<br>
Exemplo de resposta:
<br>

```json
[
	{
    "cadeiras_comuns": 250,
    "cadeiras_namoradeiras": 6,
    "espaços_cadeirantes": 4,
    "certificado_de_vistoria_anual": true,
    "categoria_da_sala": "imax"
	}
]
```
