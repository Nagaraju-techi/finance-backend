const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transaction = sequelize.define('Transaction', {
  amount: DataTypes.FLOAT,
  type: DataTypes.ENUM('income', 'expense'),
  category: DataTypes.STRING,
  date: DataTypes.DATE,
  note: DataTypes.STRING
});

module.exports = Transaction;