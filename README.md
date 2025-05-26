# 🔐 CRUD App with Password Authorization

This is a simple **CRUD (Create, Read, Update, Delete)** application with **user authentication and authorization**. The app allows users to register, login, and perform CRUD operations on protected resources. Only authenticated users can access certain routes, and only admins have access to admin-only routes.

## 🚀 Features

- User Registration & Login
- Password hashing using **bcryptjs**
- JWT-based Authentication
- Role-based Authorization (e.g., Admin access)
- CRUD operations on a sample resource (e.g., Posts or Products)
- MongoDB with Mongoose
- Express.js REST API
- Postman collection for testing

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

---

## 📁 Folder Structure

project-root/
│
├── controllers/ # Route logic (CRUD + Auth)
├── models/ # Mongoose models
├── middleware/ # Auth and role-based middleware
├── routes/ # API route definitions
├── Database/dbConfig.js# MongoDB connection
├── .env # Environment variables
├── server.js # Entry point
└── README.md


## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/crud-auth-app.git
cd crud-auth-app
````
2. Install dependencies
   npm install

3. setup environment variables

   PORT=5000
  MONGO_URL=mongodb+srv://Akshayam:Akshayam@cluster0.eivuabl.mongodb.net/
  JWT_SECRET=Akshaya

4. Run application
    npm run dev

   API ENDPOINTS

   | Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a user     |
| POST   | `/api/auth/login`    | Login and get token |

🔒 Protected Routes
Include the JWT token in the Authorization: Bearer <token> header.

| Method | Endpoint         | Description     | Access |
| ------ | ---------------- | --------------- | ------ |
| GET    | `/api/items`     | Get all items   | Auth   |
| POST   | `/api/items`     | Create new item | Auth   |
| PUT    | `/api/items/:id` | Update item     | Auth   |
| DELETE | `/api/items/:id` | Delete item     | Admin  |

🧪 Testing with Postman
Import the included Postman collection (if provided)

Register a user

Login to receive JWT

Use the JWT token in Authorization header as Bearer <token>

Access protected endpoints

API DOCUMENTATION
https://documenter.getpostman.com/view/44994873/2sB2qcDMK2




