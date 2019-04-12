var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home.ejs'));
router.get('/stills', (req, res) => res.render('stills.ejs'));
module.exports = router;