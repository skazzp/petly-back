const express = require('express');
const passport = require('passport');
require('./googleAuth.js')
const session = require('express-session')

function isLoggedIn (req, res, next) {
req.user ? next() : res.sendStatus(401)
}
const app = express();
app.use(session({secret: 'cat'}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => {
    res.send(
       '<a href="/auth/google">Authenticate with Google</a>'
    )
});
app.get('/auth/google', passport.authenticate('google', {scope: ['email', 'profile']}))
app.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
}))
app.get('/auth/failure', (req, res) => {
    res.send('Something went wrong')
})
app.get('/protected', isLoggedIn, (req, res) => {

    res.send(`Hello, ${req.user.displayName}`)
})
app.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err) }})
    req.session.destroy();
    res.redirect('/');
})
app.listen(5000, () => console.log('listening on: 5000'));