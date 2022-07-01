const Funcionarios = require('./tabela')
const { v4: uuidv4 } = require('uuid')

class Funcionario {
    static async consultar() {
        try {
            var parametros = {
                TableName: Funcionarios.tabela
            }

            const listaFuncionarios = await Funcionarios.cliente.scan(parametros).promise()
            
            return listaFuncionarios
        } catch (error) {
            return error
        }
    }

    static async cadastrar(dados) {
        try {
            var parametros = {
                TableName: Funcionarios.tabela,
                Item: {
                    id: uuidv4(),
                    nome: dados.NOME,
                    idade: dados.IDADE,
                    cargo: dados.CARGO
                }
            }

            await Funcionarios.put(parametros).promise()
            
            return 'Funcionário Criado'
        } catch (error) {
            return error
        }
    }

    static async atualizar(dados, id) {
        try {
            var parametros = {
                TableName: Funcionarios.tabela,
                Key: {HashKey: id},
                UpdateExpression: `set #a = :x, #b = :y, #c: :z`,
                ExpressionAttributeNames: {
                    '#a' : 'nome',
                    '#b' : 'cargo',
                    '#c' : 'idade'
                },
                ExpressionAttributeValues: {
                    ':x' : dados.NOME,
                    ':y' : dados.CARGO,
                    ':z' : dados.IDADE
                }
            }

            await Funcionarios.update(parametros).promise()
            
            return 'Funcionário Atualizado'
        } catch (error) {
            return error
        }
    }

    static async deletar(dados) {
        try {
            var parametros = {
                TableName: Funcionarios.tabela,
                Key: {HashKey: id}
            }

            await Funcionarios.delete(parametros).promise()
            
            return 'Funcionário Excluido'
        } catch (error) {
            return error
        }
    }
}

module.exports = Funcionario