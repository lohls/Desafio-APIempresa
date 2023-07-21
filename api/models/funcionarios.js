'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      funcionarios.belongsTo(models.departamentos, {
        as: 'departamento_Funcionario',
        foreignKey: 'departamentoId'
      })
    }
  }
  funcionarios.init({
    nome: DataTypes.STRING,
    Email: DataTypes.STRING,
    Cargo: DataTypes.STRING,
    Salario: DataTypes.STRING,
    departamentoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'funcionarios',
  });
  return funcionarios;
};