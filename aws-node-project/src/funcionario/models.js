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
                    nome: dados.nome,
                    idade: dados.idade,
                    cargo: dados.cargo
                }
            }

            await Funcionarios.cliente.put(parametros).promise()
            
            return 'Funcionário Criado'
        } catch (error) {
            return error
        }
    }

    static async atualizar(dados, id) {
        try {
            var parametros = {
                TableName: Funcionarios.tabela,
                Key: {id: id},
                UpdateExpression: `set #a = :x, #b = :y, #c = :z`,
                ExpressionAttributeNames: {
                    '#a' : 'nome',
                    '#b' : 'cargo',
                    '#c' : 'idade'
                },
                ExpressionAttributeValues: {
                    ':x' : dados.nome,
                    ':y' : dados.cargo,
                    ':z' : dados.idade
                }
            }

            await Funcionarios.cliente.update(parametros).promise()
            
            return 'Funcionário Atualizado'
        } catch (error) {
            return error
        }
    }

    static async deletar(id) {
        try {
            var parametros = {
                TableName: Funcionarios.tabela,
                Key: {id: id}
            }

            await Funcionarios.cliente.delete(parametros).promise()
            
            return 'Funcionário Excluido'
        } catch (error) {
            return error
        }
    }
}

module.exports = Funcionario