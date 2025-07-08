const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

type Options = {
  role?: 'role' | 'user';
  model?: string;
  temperature?: number;
  max_completion_tokens?: number;
  top_p?: number;
  stream?: boolean;
  stop?: string | string[];
}

const DEFAULT_OPTIONS: Options = {
  role: 'user',
  model: process.env.DEFAULT_MODEL ?? 'groq-llama-3-70b',
  temperature: process.env.DEFAULT_TEMPERATURE ? parseFloat(process.env.DEFAULT_TEMPERATURE) : undefined,
  max_completion_tokens: process.env.DEFAULT_MAX_COMPLETION_TOKENS ? parseInt(process.env.DEFAULT_MAX_COMPLETION_TOKENS) : undefined,
  top_p: process.env.DEFAULT_TOP_P ? parseFloat(process.env.DEFAULT_TOP_P) : undefined,
  stream: process.env.DEFAULT_STREAM ? process.env.DEFAULT_STREAM.toLowerCase() === 'true' : undefined,
  stop: process.env.DEFAULT_STOP ?? undefined,
}

async function send(content: string, options: Options | undefined = undefined): Promise<any> {
  return groq.chat.completions.create({
    messages: [
      {
        role: options?.role ?? DEFAULT_OPTIONS.role,
        content: content,
      },
    ],
    model: options?.model ?? DEFAULT_OPTIONS.model,
    temperature: options?.temperature ?? DEFAULT_OPTIONS.temperature,
    max_completion_tokens: options?.max_completion_tokens ?? DEFAULT_OPTIONS.max_completion_tokens,
    top_p: options?.top_p ?? DEFAULT_OPTIONS.top_p,
    stream: options?.stream ?? DEFAULT_OPTIONS.stream,
    stop: options?.stop ?? DEFAULT_OPTIONS.stop
  });
}

module.exports = { send };