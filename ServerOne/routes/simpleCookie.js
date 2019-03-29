var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('simpleCookie', { 
        selected: req.cookies.selected, 
        title: 'Server One'  
    });
});

router.post('/', function(req, res, next) {
    res.cookie('selected',req.body.selected)
    res.send();
});

module.exports = router;
