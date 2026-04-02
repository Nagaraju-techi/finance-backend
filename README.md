# Finance Dashboard Backend

## 📌 Overview
This project is a backend system for a finance dashboard that supports user management, financial record handling, and role-based access control.

## 🚀 Features
- User Registration & Login (JWT Authentication)
- Role-Based Access Control (Admin, Analyst, Viewer)
- Financial Transactions (CRUD operations)
- Dashboard Summary (Income, Expense, Balance)

## 🛠 Tech Stack
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication

## 📂 Project Structure
- config/ → Database connection
- models/ → Sequelize models
- controllers/ → Business logic
- routes/ → API routes
- middleware/ → Auth & role control

## 🔐 Roles
- Admin → Full access
- Analyst → Read + insights
- Viewer → Read-only

## 📡 API Endpoints

### User
- POST /api/users/register
- POST /api/users/login

### Transactions
- POST /api/transactions
- GET /api/transactions
- PUT /api/transactions/:id
- DELETE /api/transactions/:id

### Dashboard
- GET /api/dashboard

## ⚙️ Setup Instructions

1. Clone the repository
2. Install dependencies:
   npm install
3. Create `.env` file
4. Run MySQL and create database:
   CREATE DATABASE finance_db;
5. Start server:
   npm run dev

## 📊 Example Dashboard Output

{
  "totalIncome": 5000,
  "totalExpense": 0,
  "balance": 5000
}

## 📌 Assumptions
- JWT used for authentication
- Role-based access handled via middleware
- Basic validation implemented

## ✨ Future Improvements
- Pagination
- Advanced filtering
- API documentation (Swagger)
- Unit testing
