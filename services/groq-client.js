"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = send;
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const DEFAULT_OPTIONS = {
    role: 'user',
    model: (_a = process.env.DEFAULT_MODEL) !== null && _a !== void 0 ? _a : 'groq-llama-3-70b',
    temperature: process.env.DEFAULT_TEMPERATURE ? parseFloat(process.env.DEFAULT_TEMPERATURE) : undefined,
    max_completion_tokens: process.env.DEFAULT_MAX_COMPLETION_TOKENS ? parseInt(process.env.DEFAULT_MAX_COMPLETION_TOKENS) : undefined,
    top_p: process.env.DEFAULT_TOP_P ? parseFloat(process.env.DEFAULT_TOP_P) : undefined,
    stream: process.env.DEFAULT_STREAM ? process.env.DEFAULT_STREAM.toLowerCase() === 'true' : undefined,
    stop: (_b = process.env.DEFAULT_STOP) !== null && _b !== void 0 ? _b : undefined,
};
function send(content_1) {
    return __awaiter(this, arguments, void 0, function* (content, options = undefined) {
        var _a, _b, _c, _d, _e, _f, _g;
        return groq.chat.completions.create({
            messages: [
                {
                    role: (_a = options === null || options === void 0 ? void 0 : options.role) !== null && _a !== void 0 ? _a : DEFAULT_OPTIONS.role,
                    content: content,
                },
            ],
            model: (_b = options === null || options === void 0 ? void 0 : options.model) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS.model,
            temperature: (_c = options === null || options === void 0 ? void 0 : options.temperature) !== null && _c !== void 0 ? _c : DEFAULT_OPTIONS.temperature,
            max_completion_tokens: (_d = options === null || options === void 0 ? void 0 : options.max_completion_tokens) !== null && _d !== void 0 ? _d : DEFAULT_OPTIONS.max_completion_tokens,
            top_p: (_e = options === null || options === void 0 ? void 0 : options.top_p) !== null && _e !== void 0 ? _e : DEFAULT_OPTIONS.top_p,
            stream: (_f = options === null || options === void 0 ? void 0 : options.stream) !== null && _f !== void 0 ? _f : DEFAULT_OPTIONS.stream,
            stop: (_g = options === null || options === void 0 ? void 0 : options.stop) !== null && _g !== void 0 ? _g : DEFAULT_OPTIONS.stop
        });
    });
}
