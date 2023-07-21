'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      departamentos.hasMany(models.funcionarios,{
        as: 'departamento_Funcionario',
        foreignKey: 'departamentoId'
      })
    }
  }
  departamentos.init({
    nome: DataTypes.STRING,
    descrição: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'departamentos',
  });
  return departamentos;
};