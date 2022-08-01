import DAO from "./DAO.js"

class FilmesMetodos extends DAO{
    static async createTableFilmes() {
        const query = `
        CREATE TABLE IF NOT EXISTS filmes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            genero VARCHAR,
            duracao VARCHAR,
            anoLancamento VARCHAR,
            diretor VARCHAR,
            sinopse TEXT
        )`
            const response = await this.createTableFilmes(query)
            return response
    }

    static async novoFilme(filme) {
        const query = `
            INSERT INTO combos (name, genero, duracao, anoLancamento, diretor, sinopse)
            VALUES (?, ?, ?, ?, ?, ?)`
        const response = await this.novoFilme(filme, query)
        return response
    }

    static listarTodosFilmes(){
        const query = `SELECT * FROM filmes`
        const response = await this.listarTodosFilmes(query)
        return response
    }

    static listarFilmesPorId(id){
        const query = `SELECT * FROM filmes WHERE id=?`
        const response = await this.listarFilmesPorId(query)
        return response
    }
    
    static deletarFilmesPorId(id){
        const query = `DELETE * FROM filmes WHERE id=?`
        const response = await this.deletarFilmesPorId(query)
        return response
    }
    
}

export default FilmesMetodos

