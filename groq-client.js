const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function send(content, options = undefined) {
  return groq.chat.completions.create({
    messages: [
      {
        role: options?.role ?? "user",
        content: content,
      },
    ],
    model: options?.model ?? process.env.DEFAULT_MODEL
  });
}

module.exports = { send };