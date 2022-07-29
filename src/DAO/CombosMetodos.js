import { CombosDatabase } from "../infra/CombosDatabase.js"

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
}

export default CombosMetodos

