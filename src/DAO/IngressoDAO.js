import Database from "../infra/Database.js";

class IngressoDAO{
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (e)=>{
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    }

    static createTable(){
        
        this.activePragma()

        const query = `
        CREATE TABLE IF NOT EXISTS ingresso(
            filme TEXT, 
            sala INTEGER, 
            assento INTEGER, 
            dataHora TEXT, 
            precoIngresso FLOAT
        )
        `
        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela ingresso criada com sucesso!")
                }
            })
        })
    }

    static obterIngressoPeloID(id){
        const query = `SELECT * FROM ingresso WHERE id = ?`

        return new Promise((resolve, reject)=>{
            Database.run(query, [id], (row, e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(row)
                }
            })
        })
    }

    criarIngresso = (ingresso) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO bebidas (filme, sala, assento, dataHora, precoIngresso) VALUES (?, ?, ?, ?, ?)`, 
                (error) => {
                    if (error) {
                        reject('Erro ao criar o ingresso: ' + error)
                    } else {
                        resolve('Ingresso criado com sucesso')
                    }
                })
        })
    }
    
    atualizarIngresso = (id, ingresso) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE ingresso SET filme = ?, sala = ?, assento = ?, dataHora = ?, precoIngresso = ? WHERE id = ?`, 
            (error) => {
                if (error) {
                    reject('Erro ao atualizar o ingresso: ' + error)
                } else {
                    resolve('Ingresso atualizado com sucesso.')
                }
            })
        })
    }

    // static inserirUsuario(usuario){
    //     const query = `INSERT INTO usuarios (nome, email, telefone) VALUES (?,?,?)`

    //     const body = Object.values(usuario)

    //     return new Promise((resolve, reject)=>{
    //         Database.run(query, [...body], (e)=>{
    //             if(e){
    //                 reject(e.message)
    //             } else {
    //                 resolve({error: false, message: "Usuario cadastrado com sucesso!"})
    //             }
    //         })
    //     })
    // }

}

export default IngressoDAO