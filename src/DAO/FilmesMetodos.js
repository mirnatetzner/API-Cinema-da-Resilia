import FilmesDatabase from "../infra/FilmesDatabase.js"

class FilmesDatabase {
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        FilmesDatabase.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras ativas")
            }
        })
    }

    static createTableFilmes() {
        this.activePragma()

        const query = `
        CREATE TABLE IF NOT EXISTS filmes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            genero VARCHAR,
            duracao VARCHAR,
            anoLancamento VARCHAR,
            diretor VARCHAR,
            sinopse VARCHAR
        )`

        return new Promise((resolve, reject) => {
            FilmesDatabase.run(query, (e) => {
                if(e) {
                    reject(e.message)
                } else {
                    resolve("Tabela filmes criada com sucesso")
                }
            })
        })
    }

    static listarFilmes(filmes){
        const body = Object.values(filmes)

        return body
      
    }
    
    static novoFilme(filme) {
        const query = `
            INSERT INTO combos (name, genero, duracao, anoLancamento, diretor, sinopse)
            VALUES (?, ?, ?, ?, ?, ?)`

        const body = Object.values(filme)

        return new Promise((resolve, reject) => {
            FilmesDatabase.run(query, [...body], (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Filme adicionado com sucesso!"})
                }
            })
        })
    }
}

export default FilmesDatabase

