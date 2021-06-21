const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access   Private
router.get('/', (req, res) => {
    res.send('Registered a user');
});

module.exports = router;
