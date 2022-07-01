const funcionarioModels = require('./models')

class Funcionario {
    static async consultar(req, res) {
        try {
            const consultarFuncionarios = await funcionarioModels.consultar()
            
            return res.status(200).json({
                LISTA_FUNCIONARIOS: consultarFuncionarios,
                STATUS: 'OK'
            })
        } catch (error) {
            return res.status(500).json({STATUS: 'ERRO AO CONSULTAR FUNCIONÁRIO'})
        }
    }

    static async cadastrar(req, res) {
        try {
            const cadastrarFuncionario = await funcionarioModels.cadastrar(req.body)
            
            return res.status(200).json({
                STATUS: cadastrarFuncionario
            })
        } catch (error) {
            return res.status(500).json({STATUS: 'ERRO AO CADASTRAR FUNCIONÁRIO'})
        }
    }

    static async atualizar(req, res) {
        try {
            const atualizarFuncionario = await funcionarioModels.atualizar(req.body, req.params.id)
            
            return res.status(200).json({
                STATUS: atualizarFuncionario
            })
        } catch (error) {
            return res.status(500).json({STATUS: 'ERRO AO ATUALIZAR FUNCIONÁRIO'})
        }
    }

    static async deletar(req, res) {
        try {
            const deletarFuncionario = await funcionarioModels.deletar(req.params.id)
            
            return res.status(200).json({
                STATUS: deletarFuncionario
            })
        } catch (error) {
            return res.status(500).json({STATUS: 'ERRO AO EXCLUIR FUNCIONÁRIO'})
        }
    }
}

module.exports = Funcionario