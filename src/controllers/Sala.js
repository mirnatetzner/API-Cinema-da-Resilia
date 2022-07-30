import SalaModel from "../models/Models.js";
import ValidacoesSala from "../services/ValidacoesSala.js";
import DatabaseSalaMetodos from "../DAO/DatabaseSalaMetodos.js";
import Database from "../infra/Database.js";

DatabaseSalaMetodos.createTableSala()

class Salas{
    static rotas(app){
        app.get("/sala", async (req,res)=>{
            const response = await DatabaseSalaMetodos.listarTodasSalas(req)
            res.status(200).json(response)
        })

        app.get("/sala/:id", async (req, res)=>{
            try {
                const Sala = await DatabaseSalaMetodos.listarSalaPorId(req.params.id)
                if(!Sala){
                    throw new Error("Não encontradamos nenhuma sala com esse Id")
                }
                res.status(200).json(Sala)
            } catch (error) {
                res.status(404).send(error.message)
            }
        })

        app.post("/sala", async (req, res)=>{

            const isValid = ValidacoesSala.isValid(...Object.values(req.body))

            try {              
                if(isValid){
                    const Sala = new SalaModel(...Object.values(req.body))
                    const response = await DatabaseSalaMetodos.inserirSala(Sala)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/sala/:id", (req, res)=> {
            const isValid = ValidacoesService.isValid(...Object.values(req.body))

            if(isValid){
                const sala = new SalaModel(...Object.values(req.body))
                const response = DatabaseSalaMetodos.atualizarPorId(req.params.id, sala)
                res.status(201).json(response)
            } else {
                res.status(400).json({Erro:"Erro"})
            }
        })
        

        app.patch("/sala/:id", (req, res)=>{
            const response = DatabaseSalaMetodos.atualizaPropriedadesPorId(req.params.id, req.body)
            res.status(200).json(response)
        })

        app.delete("/sala/:index", (req, res) => {
            if(ValidacoesService.validaIndex(req.params.index, Database.Sala)){
                const usuario = DatabaseSalaMetodos.deletaUsuarioPorId(req.params.index)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Sala não encontrada"})
            }
        })
    }
}


export default Salas;