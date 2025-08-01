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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groq_client_1 = __importDefault(require("../services/groq-client"));
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/**
 * @swagger
 * /api/groq/{content}:
 *   get:
 *     summary: Sends a message to the Groq API and returns a response
 *     description: Sends dynamic content as a path parameter to the Groq API. Optional query parameters can customize the behavior.
 *     parameters:
 *       - in: path
 *         name: content
 *         required: true
 *         schema:
 *           type: string
 *         description: The content/message to send to the Groq API
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: Role of the message (e.g., user, system)
 *       - in: query
 *         name: model
 *         schema:
 *           type: string
 *         description: Groq model to use
 *       - in: query
 *         name: temperature
 *         schema:
 *           type: number
 *         description: Controls randomness of the output (higher = more random)
 *       - in: query
 *         name: max_completion_tokens
 *         schema:
 *           type: integer
 *         description: Maximum number of tokens in the completion
 *       - in: query
 *         name: top_p
 *         schema:
 *           type: number
 *         description: Controls diversity via nucleus sampling
 *       - in: query
 *         name: stream
 *         schema:
 *           type: boolean
 *         description: Whether to stream the response
 *       - in: query
 *         name: stop
 *         schema:
 *           type: string
 *         description: The stop sequence for the completion
 *     responses:
 *       200:
 *         description: Successful response from Groq
 */
router.get('/:content', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const content = req.params.content;
            const options = req.query;
            res.send(yield (0, groq_client_1.default)(content, options));
        }
        catch (error) {
            next(error);
        }
    });
});
exports.default = router;
