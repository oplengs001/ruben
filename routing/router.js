var express = require('express');
var router = express.Router();
var empData = require('../models/Company');

let bodyparser = require("body-parser");

let urlencodedParser  = bodyparser.urlencoded({extended:true});


router.post('/insert', urlencodedParser, (req, res, next) =>{ 
  // console.log(req.body.task)
  let profile = {
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    address: req.body.address
  };

  let data = new empData(profile);
  data.save();

  res.redirect('/');
});

router.get('/', (req,res,next) =>{ 
res.render('index', {
})
});
module.exports = router;