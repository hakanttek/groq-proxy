const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function getOrDefault(options, key) {
  return options?.[key] ?? process.env['DEFAULT_' + key.toUpperCase()];
}

async function send(content, options = undefined) {
  return groq.chat.completions.create({
    messages: [
      {
        role: getOrDefault(options, 'role') ?? "user",
        content: content,
      },
    ],
    model: getOrDefault(options, 'model'),
    temperature: getOrDefault(options, 'temperature'),
    max_completion_tokens: getOrDefault(options, 'max_completion_tokens'),
    top_p: getOrDefault(options, 'top_p'),
    stream: getOrDefault(options, 'stream'),
    stop: getOrDefault(options, 'stop'),
  });
}

module.exports = { send };