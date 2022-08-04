![image](https://user-images.githubusercontent.com/102565368/182753604-143dd23a-6ee2-4ba1-a283-f61c0cbe9457.png)


# *CineIndie* API
 A ideia era a criação do produto mínimo viável de uma API Rest para web sites de cinemas independentes. 
API Rest com CRUD das operações no padrão HTTP que faz requisições ao "Cinema da Resilia"

## Como utilizar nossa aplicação:
- Em seu terminal e na pasta que deseja utilizar a aplicação, dê git clone em nosso projeto:
```
https://github.com/mirnatetzner/API-Cinema-da-Resilia.git
```

 ## Instalações necessárias 
 As dependências utilizadas nessa aplicação foram: Express, SQLite3, Dotenv, Path, Url. Para sua instalação, utilizar, separadamente, os comandos abaixo:
```npm i express
   npm i sqlite3
   npm i sqlite3
   npm i dotenv
   npm i path
   npm i url
```

## Rotas e entidades	🔀
O projeto se constitui em quatro entidades, sendo elas: Filmes, Ingressos, Salas e Combos. Abaixo, alguns exemplos de requisições e respostas:

### get: url/filmes/2 
```
  ISAAAAC EH PRA TU POR AQ O PRIMEIRO EXEMPLO LA O PRIMEIRO GILME SEI LA
```

Para o caso de adição de um novo filme:
### post: url/
Objeto de requisição:
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
Resposta:
```
  {
    "error": false,
    "message": "Cadastrado com sucesso!"
  }
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
 
