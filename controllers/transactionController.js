const Transaction = require('../models/Transaction');

exports.create = async (req, res) => {
  const data = await Transaction.create(req.body);
  res.json(data);
};

exports.getAll = async (req, res) => {
  const data = await Transaction.findAll();
  res.json(data);
};

exports.update = async (req, res) => {
  await Transaction.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ msg: "Updated" });
};

exports.delete = async (req, res) => {
  await Transaction.destroy({
    where: { id: req.params.id }
  });
  res.json({ msg: "Deleted" });
};