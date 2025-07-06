const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const chatCompletion = await getGroqChatCompletion();
  return chatCompletion.choices[0]?.message?.content || "";
}

async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}

async function send(content, options = undefined) {
  return groq.chat.completions.create({
    messages: [
      {
        role: options.role ?? "user",
        content: content,
      },
    ],
    model: options.model ?? process.env.DEFAULT_MODEL
  });
}

module.exports = { main, getGroqChatCompletion, send };