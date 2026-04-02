const Transaction = require('../models/Transaction');

exports.summary = async (req, res) => {
  const income = await Transaction.sum('amount', {
    where: { type: 'income' }
  });

  const expense = await Transaction.sum('amount', {
    where: { type: 'expense' }
  });

  res.json({
    totalIncome: income || 0,
    totalExpense: expense || 0,
    balance: (income || 0) - (expense || 0)
  });
};