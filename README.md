📊 CRM Application (MERN + PostgreSQL)

A full-featured Customer Relationship Management (CRM) system built using the MERN stack with PostgreSQL as the database. This application helps businesses manage customers, leads, interactions, and sales pipelines efficiently.

⸻

🚀 Tech Stack

Frontend
	•	React.js
	•	React Router
	•	Axios
	•	Context API / Redux (optional)
	•	Tailwind CSS / Bootstrap

Backend
	•	Node.js
	•	Express.js
	•	REST API Architecture

Database
	•	PostgreSQL (via Prisma / Sequelize / pg)

Other Tools
	•	JWT Authentication
	•	Bcrypt (password hashing)
	•	dotenv (environment variables)
	•	CORS

⸻

✨ Features
	•	🔐 User Authentication (Login/Register)
	•	👥 Customer Management
	•	📇 Lead Tracking
	•	📊 Sales Pipeline Management
	•	📝 Notes & Activity Tracking
	•	📂 File Uploads (documents, PDFs)
	•	🔎 Search & Filter
	•	📈 Dashboard Analytics

⸻

📁 Project Structure

crm-app/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── server/                 # Node + Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── app.js
│   └── package.json
│
├── database/
│   └── schema.sql
│
├── .env
├── README.md
└── package.json


⸻

⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/crm-app.git
cd crm-app

2️⃣ Setup Backend

cd server
npm install

Create a .env file:

PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev


⸻

3️⃣ Setup Frontend

cd client
npm install
npm start


⸻

🗄️ Database Setup (PostgreSQL)
	•	Install PostgreSQL locally or use cloud (Supabase, Neon, etc.)
	•	Create a database
	•	Run migrations or execute schema.sql

⸻

🔌 API Endpoints (Sample)

Auth
	•	POST /api/auth/register
	•	POST /api/auth/login

Customers
	•	GET /api/customers
	•	POST /api/customers
	•	PUT /api/customers/:id
	•	DELETE /api/customers/:id

Leads
	•	GET /api/leads
	•	POST /api/leads

⸻

🧠 Architecture Overview
	1.	User interacts with React frontend
	2.	Frontend sends API requests via Axios
	3.	Express backend processes logic
	4.	PostgreSQL stores/retrieves data
	5.	Response sent back to frontend

⸻

🔐 Authentication Flow
	•	User logs in → JWT token generated
	•	Token stored (localStorage / cookies)
	•	Token sent in headers for protected routes

⸻

📌 Future Improvements
	•	Role-based access control (Admin/User)
	•	Email notifications
	•	AI-based lead scoring
	•	Real-time updates (WebSockets)

⸻

🤝 Contributing
	1.	Fork the repo
	2.	Create a new branch
	3.	Make changes
	4.	Submit a pull request

⸻

📄 License

This project is licensed under the MIT License.

⸻

💡 Author

Developed by Mayank Bisht

⸻

⭐ If you like this project, consider giving it a star!
