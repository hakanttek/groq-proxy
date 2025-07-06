const { send } = require('../groq-client');

var express = require('express');
var router = express.Router();

router.get('/:content', async function (req, res, next) {
  const content = req.params.content;
  res.send(await send(content));
});

module.exports = router;