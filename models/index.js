const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

// Desafio 1: Criando Categoria
const Categoria = sequelize.define('Categoria', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

// Desafio 1: Associação 1:N
Categoria.hasMany(Produto, {
  foreignKey: 'categoriaId',
  as: 'produtos'
});
Produto.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
  as: 'categoria'
});

module.exports = {
  sequelize,
  Produto,
  Categoria,
  Op
};
