const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
  res.send('logging out');
});

// auth with google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

// cb route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached cb uri');
});

module.exports = router;
