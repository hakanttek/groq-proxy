import search from '../services/search-service';
import express, { Router } from 'express';

var router = express.Router();

/**
 * @swagger
 * /api/customer/{customer}:
 *   get:
 *     summary: Perform a search customer using SerpAPI
 *     description: Performs a web search using SerpAPI based on the customer parameter. The search engine can be customized via a customer parameter.
 *     parameters:
 *       - in: path
 *         name: customer
 *         required: true
 *         schema:
 *           type: string
 *         description: The search term to customer (e.g., "Leather handbags")
 *     responses:
 *       200:
 *         description: Successful response with search results
 *       500:
 *         description: Internal server error
 */
router.get('/:customer', async function (req, res, next) {
  try {
    const customer = req.params.customer;
    res.send(await search(customer).then(res => res.related_brands));
  }
  catch (error) {
    next(error);
  }
});

export default router;