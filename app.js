const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running"));
});