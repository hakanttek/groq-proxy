const { main, getGroqChatCompletion } = require('../groq-client');

var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
  res.send(await main());
});

router.get('/groqChatCompletion', async function(req, res, next) {
  res.send(await getGroqChatCompletion());
});

module.exports = router;