# AI FAQ ASSISTANT

A simple and modern FAQ chatbot built with **Node.js, Express, HTML, CSS, and JavaScript**.

The project provides a chatbot interface where users can ask questions and receive answers from a local FAQ database. It also includes an **Admin Panel** for managing FAQ questions and answers.

## 🚀 Features

* 🤖 FAQ chatbot
* 💬 Natural-language question matching
* 📚 50+ predefined FAQs
* 🔐 Admin login system
* ➕ Add new FAQs
* ✏️ Edit existing FAQs
* 🗑️ Delete FAQs
* 🚪 Admin logout
* 🔒 Protected admin API routes
* 💾 FAQ data stored locally in JSON
* 🌐 Node.js + Express backend
* 🎨 Modern dark/glass-style frontend
* ❌ No paid OpenAI API required

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### Data Storage

* JSON

## 📁 Project Structure

```text
AI-FAQ-ASSISTANT/
│
├── FRONTEND/
│   ├── index.html
│   ├── admin.html
│   └── login.html
│
├── SERVER/
│   ├── FAQ_DATA.js
│   ├── faqs.json
│   ├── server.mjs
│   ├── package.json
│   └── package-lock.json
│
└── .gitignore
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/bvignesh099-ship-it/AI-FAQ-ASSISTANT-API.git
```

### 2. Open the project

```bash
cd AI-FAQ-ASSISTANT-API
```

### 3. Go to the SERVER folder

```bash
cd SERVER
```

### 4. Install dependencies

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file inside the `SERVER` folder:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

**Important:** Never upload your `.env` file to GitHub.

The project already uses `.gitignore` to prevent `.env` and `node_modules` from being uploaded.

## ▶️ Run the Server

From the `SERVER` folder:

```bash
node server.mjs
```

You should see:

```text
FAQ SERVER running on http://localhost:3000
```

## 💻 Open the Chatbot

Open:

```text
FRONTEND/index.html
```

Then ask questions such as:

```text
I forgot my password
```

or:

```text
How can I track my order?
```

The chatbot will search the FAQ database and return the matching answer.

## 👨‍💻 Admin Panel

Open:

```text
FRONTEND/login.html
```

Login using the credentials configured in `.env`.

The Admin Panel allows you to:

* Add FAQs
* Edit FAQs
* Delete FAQs
* Manage FAQ keywords
* Manage FAQ answers
* Logout securely

## 🔌 API Endpoints

### Ask a FAQ

```http
POST /api/faq
```

Example request:

```json
{
  "question": "I forgot my password"
}
```

Example response:

```json
{
  "answer": "Go to Settings > Security > Reset Password and follow the instructions."
}
```

### Get FAQs

```http
GET /api/faqs
```

### Admin Login

```http
POST /api/admin/login
```

### Add FAQ

```http
POST /api/faqs
```

### Edit FAQ

```http
PUT /api/faqs/:id
```

### Delete FAQ

```http
DELETE /api/faqs/:id
```

### Admin Logout

```http
POST /api/admin/logout
```

## 🔒 Security

The project includes:

* Admin authentication
* Protected admin API routes
* Session-based admin token
* Environment variables for admin credentials
* `.gitignore` protection for `.env`
* `.gitignore` protection for `node_modules`

> Do not commit passwords, API keys, tokens, or other secrets to GitHub.

## 🎯 Future Improvements

Possible future upgrades:

* Database integration
* Better AI-based semantic search
* User registration
* Chat history
* FAQ categories
* Search functionality
* Analytics dashboard
* Cloud deployment
* Responsive mobile improvements

## 👨‍💻 Author

**B Vignesh**

Built as a learning project using Node.js, Express, HTML, CSS, and JavaScript.

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
