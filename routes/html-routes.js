var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home.ejs'));
router.get('/stills', (req, res) => res.render('stills.ejs'));
router.get('/motion', (req, res) => res.render('motion.ejs'));
router.get('/about', (req, res) => res.render('about.ejs'));
router.get('/contact', (req, res) => res.render('contact.ejs'));
router.get('*',function (req, res) {
    res.redirect('/');
});
module.exports = router;