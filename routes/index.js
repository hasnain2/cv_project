var express = require('express');
const { request } = require('../app');
var reque = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  reque.get('http://127.0.0.1:3333/', function(err, response, body) {
    if (!err && response.statusCode == 200) {
      console.log(body);
        var locals = JSON.parse(body);
        console.log(locals);
        res.render('cv', locals);
    }
})
});

module.exports = router;
