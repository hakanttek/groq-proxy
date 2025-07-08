import search from '../services/search-service';
import express, { Router } from 'express';

var router = express.Router();

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
router.get('/:query', async function (req, res, next) {
  try {
    const query = req.params.query;
    res.send(await search(query, req.query));
  }
  catch (error) {
    next(error);
  }
});

export default router;