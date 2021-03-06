var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get("/", function(request, response,next){
  res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

router.post('/', passport.authenticate('local',
{ successRedirect: '/views/success.html', failureRedirect: '/views/failure.html'
})
);

module.exports =router;
