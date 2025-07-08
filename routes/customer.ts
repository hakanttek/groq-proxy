import search from '../services/search-service';
import express, { Router } from 'express';
import send from '../services/groq-client';

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
    const searchResults = await search(customer).then(res => res.related_brands);
    if (searchResults.length === 0) {
      res.status(404).send({ message: 'No related brands found.' });
    }
    else {
      const searchStr: string = JSON.stringify(searchResults);
      var content = process.env.PROMT ?? "Below is a list of potential clients. For each person, generate a personalized outreach message (email or LinkedIn intro) based on their industry, location, and company info."
      content += `\n\nCustomers as JSON:\n${searchStr}`;
      var ai_res = await send(content)
      res.send(ai_res.choices[0].message.content);
    }
  }
  catch (error) {
    next(error);
  }
});

export default router;