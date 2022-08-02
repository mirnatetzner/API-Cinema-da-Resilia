// import IngressoModel from '../models/IngressoModel'
// import ValidacoesIngresso from "../services/ValidacoesIngresso.js"
import IngressoMetodos from "../DAO/IngressoMetodos.js"

class Ingresso {
    static rotas(app) {
        app.get('/ingresso/', async (req, res) => {
            try {
                const ingresso = await IngressoMetodos.listarTodosIngressos()
                res.status(200).json(ingresso)
            } catch (error) {
                res.status(500).json(error.message)
            }
        })

        app.get('/ingresso/:id', async (req, res) => {
            try {
                const ingresso = await IngressoMetodos.listarIngressoPorId(req.params.id)
                res.status(200).json(ingresso)
            } catch(error) {
                res.status(500).json(error.message)
            } 
        })
            
        app.post('/ingresso/:id', async (req, res) => {
            try {
            const ingresso = await IngressoMetodos.inserirIngresso(ingresso)
                res.status(201).json(ingresso)
            } catch (error) {
                res.status(500).json(error.message)
            }

        })

        app.patch('/ingresso/:id', async (req, res) => {
            const id = req.params.id

            try {
                const ingresso = await IngressoMetodos.listarIngressoPorId(id)

                if (ingresso) {
                    const ingresso = await IngressoMetodos.atualizarIngressoPorId(id, ingresso)
                    res.status(200).json(ingresso)
                } else {
                    res.status(404).json({msg: 'ingresso não encontrado.'})
                }
            } catch (error) {
                res.status(500).json(error.message)
            }
            })

        app.delete('/ingresso/:id', async(req, res) => {
                const id = req.params.id
        
                try {
                    const ingresso = await IngressoMetodos.listarIngressoPorId(id)
        
                    if (ingresso) {
                        const ingresso = await IngressoMetodos.deletarIngressoPorId(id)
                        res.status(200).json(ingresso)
                    } else {
                        res.status(404).json({msg: 'Ingresso não encontrado.'})
                    }
                } catch (error) {
                    res.status(500).json(error.message)
                }
        })  
    }
}

export default Ingresso