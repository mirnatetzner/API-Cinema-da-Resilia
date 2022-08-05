![image](https://user-images.githubusercontent.com/102565368/182753604-143dd23a-6ee2-4ba1-a283-f61c0cbe9457.png)


# *CineIndie* API
 A ideia era a criação do produto mínimo viável de uma API Rest para web sites de cinemas independentes. 
API Rest com CRUD das operações no padrão HTTP que faz requisições ao "Cinema da Resilia"

## Como utilizar nossa aplicação
  Em seu terminal e na pasta que deseja utilizar a aplicação, dê git clone em nosso projeto:
  
```
https://github.com/mirnatetzner/API-Cinema-da-Resilia.git
```
Além disso, para o funcionamento correto da aplicação, é preciso instalar as dependências utilizadas. Estas foram: **Express**, **SQLite3**, **Dotenv**, **Path** e **Url**. Para isso, você pode utilizar o comando simplificado:
```
npm i
```
Ou caso prefira, você pode instalá-las uma a uma utilizando, separadamente, o comando abaixo:
```npm i express
   npm i sqlite3
   npm i dotenv
   npm i path
   npm i url
   npm i pragma
```
## Rotas do projeto

```
url/combos
url/filmes
url/ingresso
url/sala

```

## Exemplos para post
```
POST: url/combos

POST: url/filmes

{
    "nome": "nome do filme",
		"genero": "Gênero do filme",
		"duracao": "Duração do filme",
		"anoLancamento": "Ano de lançamento do filme",
		"diretor": "Diretor do filme",
		"sinopse": "Sinopse do filme"
	}

POST: url/ingresso

POST: url/sala

```

## Exemplos para DELETE
```
DELETE: url/combos/id

DELETE: url/filmes/id

DELETE: url/ingresso/id

DELETE: url/sala/id

```
## Exemplos para PUT
```
PUT: url/combos/id

PUT: url/filmes/id
{
   "nome": "Teste",
		"genero": "Teste",
		"duracao": "Teste",
		"anoLancamento": "Teste",
		"diretor": "Teste",
		"sinopse": "Teste"
	}
  
PUT: url/ingresso/id

PUT: url/sala/id

```


## Rotas e entidades	🔀
Pensando nas necessidades de  O projeto se constitui em quatro entidades, sendo elas: Filmes, Ingressos, Salas e Combos. Abaixo, alguns exemplos de requisições e respostas



## Implementação dos verbos do HTTP

### GET 

 Para acessar as rotas do projeto, basta utilizar um dos comandos abaixo referente a entidade que deseja ver.
```
url/combos
url/filmes
url/ingresso
url/sala

```

### POST
```
POST: url/combos

POST: url/filmes

{
    "nome": "nome do filme",
		"genero": "Gênero do filme",
		"duracao": "Duração do filme",
		"anoLancamento": "Ano de lançamento do filme",
		"diretor": "Diretor do filme",
		"sinopse": "Sinopse do filme"
	}

POST: url/ingresso

POST: url/sala

```

O post poderá ser utilizado para adicionar um novo objeto a entidade desejada. Por exemplo, para o caso de adição de um novo filme:

```
  {
    "nome": "De Volta para o Futuro", 
    "genero": "Ficção científica", 
    "duracao": "2hrs", 
    "anoLancamento": 1985, 
    "diretor": "Robert Zemeckis", 
    "sinopse": "Viajando no tempo em um carro modificado"
  }
    
```

E a resposta deverá ser:

```
  {
    "error": false,
    "message": "Cadastrado com sucesso!"
  }
```
E isso significa que o novo filme foi cadastrado no banco de dados. 


### DELETE
```
DELETE: url/combos/id

DELETE: url/filmes/id

DELETE: url/ingresso/id

DELETE: url/sala/id

```
### PUT
```
PUT: url/combos/id

PUT: url/filmes/id
{
   "nome": "Teste",
		"genero": "Teste",
		"duracao": "Teste",
		"anoLancamento": "Teste",
		"diretor": "Teste",
		"sinopse": "Teste"
	}
  
PUT: url/ingresso/id

PUT: url/sala/id

```




## Contribuidores 👩‍💻👨‍💻
  <table>
    <tr align='center'>    
      <td align="center">
          <a href="https://github.com/mirnatetzner">
            <img src='https://avatars.githubusercontent.com/u/85193127?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>Mirna Tetzner</b>
            </sub>
          </a>
        </td>
      <td align="center">
          <td align="center">
          <a href="https://github.com/alicebranq">
            <img src='https://avatars.githubusercontent.com/u/102565368?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>Alice Branquinho</b>
            </sub>
          </a>
        </td>
      <td align="center">
          <a href="https://github.com/systemilc">
            <img src='https://avatars.githubusercontent.com/u/34551203?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>Isaac Costa</b>
            </sub>
          </a>
      </td>
      <td align="center">
        <a href="https://github.com/joaofmds">
          <img src='https://avatars.githubusercontent.com/u/95502785?v=4' width="170px;" alt="Foto de perfil do Github"/><br>
            <sub>
              <b>João Souza</b>
            </sub>
          </a>
      </td>
    </tr>
   </table>
 
