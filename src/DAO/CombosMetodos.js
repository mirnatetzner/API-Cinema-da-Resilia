import CombosDatabase from "../infra/CombosDatabase.js"

class CombosMetodos {
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        CombosDatabase.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras ativas")
            }
        })
    }

    /**
     * listagem de combos por id e name
     */
    static async listarCombos(combos){
        const query = ` SELECT * FROM combos`
        const response = await this.listAll(query)
        return response
    }     
    static async listarCombosId(id){
        const query = ` SELECT * FROM combos WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response
    }
    static async listarCombosNome(name){
        const query = ` SELECT * FROM combos WHERE name = ?`
        const response = await this.listarPorNome(id, query)
        return response
    }

    
    static createTableCombos() {
        this.activePragma()

        const query = `
        CREATE TABLE IF NOT EXISTS combos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            price INT,
            item1 VARCHAR,
            item2 VARCHAR,
            item3 VARCHAR
        )`

        return new Promise((resolve, reject) => {
            CombosDatabase.run(query, (e) => {
                if(e) {
                    reject(e.message)
                } else {
                    resolve("Tabela combos criada com sucesso")
                }
            })
        })
    }
    
    static adicaoNovosCombos(combos) {
        const query = `
            INSERT INTO combos (name, price, item1, item2, item3)
            VALUES (?, ?, ?, ?, ?)`

        const body = Object.values(combos)

        return new Promise((resolve, reject) => {
            CombosDatabase.run(query, [...body], (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Combo adicionado ao cardápio com sucesso!"})
                }
            })
        })
    }
}

export default CombosMetodos

