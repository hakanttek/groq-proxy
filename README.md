# Groq API Proxy (Express.js)

This is a simple proxy server built with Express.js to securely forward requests to the [Groq API](https://console.groq.com/).

## 🚀 Features

- CORS enabled
- Secure storage of the Groq API key (server-side)
- Simple JSON request/response format
- Lightweight and easy to set up

## 🧰 Requirements

- Node.js (v18 or later recommended)
- npm or yarn

## 🔧 Setup

```bash
git clone https://github.com/hakanttek/lead-genie.git
cd lead-genie
npm install
```

## ⚙️ Environment Variables

Create a [.env] file in the root directory and add:

```bash
GROQ_API_KEY=your_groq_api_key
PORT=3000
```

## ▶️ Running the Server

Start the proxy server with:

```bash
npm start
```