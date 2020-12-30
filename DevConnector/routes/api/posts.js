const express = require('express');
const router = express.Router();

// @route     Get api/posts
// @desc      Test route (what this route does)
// @access    Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
