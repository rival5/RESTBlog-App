const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/userModel');

passport.use(
  new GoogleStrategy(
    {
      // options for GoogleStrategy
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      // paspport cb function
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          console.log('Welcome back ' + profile.displayName);
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log('New User Created: ' + newUser);
            });
        }
      });
    }
  )
);
