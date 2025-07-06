const { send } = require('../groq-client');

var express = require('express');
var router = express.Router();

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