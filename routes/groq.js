const { send } = require('../services/groq-client');

var express = require('express');
var router = express.Router();

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
router.get('/:content', async function (req, res, next) {
  try {
    const content = req.params.content;
    const options = req.query;
    res.send(await send(content, options));
  }
  catch (error) {
    next(error);
  }
});

module.exports = router;