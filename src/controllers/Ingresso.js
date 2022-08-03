// import IngressoModel from '../models/IngressoModel'
<<<<<<< HEAD
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
=======
import ValidacoesIngresso from "../services/ValidacoesIngresso.js"
import DatabaseMetodos from "../DAO/IngressoDAO.js"

class Ingresso {
    static rotas(app) {
        app.get('/ingresso/:id', async (req, res) => {
            try {
                const ingresso = await DatabaseMetodos.obterIngressoPeloID(req.params.id)
                res.status(200).json(ingresso)
            } catch(erro) {
                res.status(500).json(erro.message)
            } 
        })
            
        app.post('/ingresso/id', async (req, res) => {
            const ingresso = req.body
            try {
            const result = await IngressoDAO.criarIngresso(ingresso)
                res.status(201).json({ msg: result })
            } catch (error) {
                res.status(500).json({ erro: error })
>>>>>>> develop
            }

        })

<<<<<<< HEAD
        app.patch('/ingresso/:id', async (req, res) => {
            const id = req.params.id

            try {
                const ingresso = await IngressoMetodos.listarIngressoPorId(id)

                if (ingresso) {
                    const ingresso = await IngressoMetodos.atualizarIngressoPorId(id, ingresso)
                    res.status(200).json(ingresso)
=======
        app.patch('/ingresso/id', async (req, res) => {
            const id = req.params.id
            const ingresso = req.body

            try {
                const ingresso = await ingressoDAO.obterIngressoPeloID(id)

                if (ingresso) {
                    const result = await ingressoDAO.atualizarIngresso(id, ingresso)
                    res.status(200).json({ msg: result })
>>>>>>> develop
                } else {
                    res.status(404).json({msg: 'ingresso não encontrado.'})
                }
            } catch (error) {
<<<<<<< HEAD
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
=======
                res.status(500).json({ erro: error })
            }
            })

        app.delete('/ingresso/id', (req, res) => {
            
        })
>>>>>>> develop
    }
}

export default Ingresso