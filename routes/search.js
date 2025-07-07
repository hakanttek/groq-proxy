var express = require('express');
var router = express.Router();

const serpApiKey = process.env.SERP_API_KEY;

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
 *           default: google
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
    const engine = req.query.engine || 'google';

    const params = new URLSearchParams({
      q: query,
      engine: engine,
      api_key: serpApiKey,
    });

    const json = await fetch(`https://serpapi.com/search.json?${params.toString()}`).then(res => res.json());

    res.send(json);
  }
  catch (error) {
    next(error);
  }
});

module.exports = router;