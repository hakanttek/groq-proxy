const { send } = require('../groq-client');

var express = require('express');
var router = express.Router();

router.get('/:content', async function (req, res, next) {
  const content = req.params.content;
  const options = req.query;
  res.send(await send(content, options));
});

module.exports = router;