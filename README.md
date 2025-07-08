# LeadGenie API

LeadGenie is an API that helps generate **personalized outreach messages** for potential clients by combining **search engine data** (via SerpAPI) and **LLM-generated content** (via Groq).

> 📌 Hosted at: [https://lead-genie.onrender.com](https://lead-genie.onrender.com)  
> 📄 Swagger Docs: [https://lead-genie.onrender.com/api-docs](https://lead-genie.onrender.com/api-docs)

---

## 🔧 Features

- 🔍 Search for related brands using **SerpAPI**
- 🤖 Generate AI-powered outreach messages using LLM APIs accessed via **Groq**
- 📄 Swagger UI for interactive API exploration

---

## 🧠 Example Use Case

**Input:**  
Search term: `Leather handbags`

**Output:**  
A list of related brands → Sent to Groq LLM → Returns outreach messages tailored to each brand (e.g., LinkedIn message or cold email)

---

## 🛠️ API Endpoints

### `GET /api/customer/:customer`

**Description:**  
Performs a search and returns AI-generated outreach messages for brands in that sector.

**Parameters:**

| Param     | In   | Type   | Description                        |
|-----------|------|--------|------------------------------------|
| customer  | path | string | Search keyword (e.g., "Handbags") |

**Example Response:**

```json
{
  "message": "Hi there! I noticed you're connected to XYZ in the fashion industry..."
}
```

---

## 🔍 Swagger Documentation

You can explore and test all available endpoints via Swagger UI.

📄 [https://lead-genie.onrender.com/api-docs](https://lead-genie.onrender.com/api-docs)

---

## 📁 Project Structure

```bash
/routes
  ├── customer.ts        # Main route: search + AI message generation
  ├── search.ts          # Optional route for SerpAPI-only access
  └── groq.ts            # Optional route for Groq testing
/services
  ├── search-service.ts  # Handles SerpAPI queries
  └── groq-client.ts     # Handles Groq API calls
/app.ts                  # Main Express application setup
/bin/www                 # Entry point to start server
```

---

## 🌐 Tech Stack

- **Node.js + Express** – Web server and routing
- **TypeScript** – Type-safe backend development
- **SerpAPI** – Fetches related brand info using real-time Google search
- **Groq LLM** – Generates custom outreach messages from brand data
- **Swagger** – Auto-generates interactive API docs

---

## ⚙️ Environment Variables

The project uses a `.env` file for configuration. Example:

```env
PORT=3000
ORIGIN=your__origin_here

GROQ_API_KEY=your_groq_api_key
SERP_API_KEY=your_serp_api_key

PROMT=Below is a list of potential clients. For each person, generate a personalized outreach message...

DEFAULT_MODEL=groq-llama-3-70b
DEFAULT_TEMPERATURE=0.7
DEFAULT_MAX_COMPLETION_TOKENS=1024
```