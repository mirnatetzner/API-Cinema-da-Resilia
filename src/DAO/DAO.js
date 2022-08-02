import FilmesDatabase from "../infra/FilmesDatabase.js";

class DAO{
    static activePragma(){
        const query = "PRAGMA foreign_keys = ON"

        FilmesDatabase.run(query, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras ativas")
            }
        })
    }

    static createTable(query){
        return new Promise((resolve, reject) => {
            FilmesDatabase.run(query, (e) => {
                if(e){
                    reject(e.message)
                }else{
                    resolve("Tabela Criada com Sucesso")
                }
            })
        })
    }

    static inserirFilme(entidade, query){
        const body = Object.values(entidade)

        return new Promise((resolve, reject) => {
            FilmesDatabase.run(query, [...body], (e) =>{
                if(e){
                    reject(e.message)
                    console.log(message)
                }else{
                    resolve({error: false, message: "Filme cadastrado com sucesso!"})
        }})
        })
    }

    static listarTodosFilmes(query){
    return new Promise((resolve, reject) => {
        FilmesDatabase.all(query, (e, resultado) => {
            if(e){
                reject(e.message)
            }else{
                resolve(resultado)
            }
        })
    })
}

    static listarFilmesPorId(id, query){
    return new Promise((resolve, reject) =>{
        FilmesDatabase.get(query, id, (e) =>{
            if(e){
                reject(e.message)
            }else{
                resolve(resultado)
            }
        })
    })
}
    static atualizarPorId(entidade, id, query){
        const body = Object.values(entidade)
        return new Promise((resolve, reject) => {
            FilmesDatabase.run(query,[...body, id], (e, result) => {
                if(e){
                    reject(e.message)
                }else{
                    resolve(result)
                }
            })
        })
    }
    static deletaFilmePorId(query, id){
        return new Promise((resolve, reject) => {
            FilmesDatabase.run(query, id, (e) => {
                if(e){
                    reject(e.message)
                }else{
                    resolve({erro: false, message: `Registro com id ${id} deletado com sucesso`})
                }
            })
        })
    }

}

export default DAO