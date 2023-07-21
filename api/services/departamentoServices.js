const Services = require("./services");
const database = require('../models')

class DepartamentoServices extends Services {
    constructor() {
        super('departamentos')
    }
    async pegaDepartamentoDoFuncionario(id) {
        const departamento = await database.departamentos.findOne({
            where: { id: id },
            include: [{
                model: database.funcionarios,
                as: 'departamento_Funcionario',
                attributes: ['id','nome', 'Email', 'Cargo', 'Salario', 'departamentoId']
            }]
        })
        return departamento
    }
    async pegaTodosOsDepartamentosComFuncionarios(){
        const departamento = await database.departamentos.findAll({
            include: [{
                model: database.funcionarios,
                as: 'departamento_Funcionario',
                attributes: ['id','nome', 'Email', 'Cargo', 'Salario', 'departamentoId']
            }]
        })
        return departamento
    }
}

module.exports = DepartamentoServices