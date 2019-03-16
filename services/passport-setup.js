const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
    // options for GoogleStrategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }),
  () => {
    // paspport cb function
  }
);
