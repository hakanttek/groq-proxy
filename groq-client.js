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
    model: options?.model ?? process.env.DEFAULT_MODEL,
    temperature: options?.temperature ?? process.env.DEFAULT_TEMPERATURE,
    max_completion_tokens: options?.max_completion_tokens ?? process.env.DEFAULT_MAX_COMPLETION_TOKENS,
    top_p: options?.top_p ?? process.env.DEFAULT_TOP_P,
    stream: options?.stream ?? process.env.DEFAULT_STREAM,
    stop: options?.stop ?? process.env.DEFAULT_STOP
  });
}

module.exports = { send };