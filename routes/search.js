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
const search_service_1 = __importDefault(require("../services/search-service"));
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/**
 * @swagger
 * /api/search/{query}:
 *   get:
 *     summary: Perform a search query using SerpAPI
 *     description: Performs a web search using SerpAPI based on the query parameter. The search engine can be customized via a query parameter.
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: The search term to query (e.g., "Node.js tutorials")
 *       - in: query
 *         name: engine
 *         schema:
 *           type: string
 *         description: The search engine to use (e.g., google, bing, yahoo)
 *     responses:
 *       200:
 *         description: Successful response with search results
 *       500:
 *         description: Internal server error
 */
router.get('/:query', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = req.params.query;
            res.send(yield (0, search_service_1.default)(query, req.query));
        }
        catch (error) {
            next(error);
        }
    });
});
exports.default = router;
