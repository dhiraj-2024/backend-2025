require('dotenv').config();
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));


  app.post('/login',passport.authenticate('local'),(req,res)=>{

    res.redirect('/')
})


app.listen(process.env.PORT , (req,res)=>{
    console.log( `server is runnig on ${process.env.PORT}`)
})