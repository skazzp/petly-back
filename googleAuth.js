const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: '481289453987-9fu4cjcu0g7se5ihuermb03s9subv7do.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
 
      return done(null, profile);
  }
));


passport.serializeUser(function(user, done) {
done(null, user)

})

passport.deserializeUser(function(user, done) {
    done(null, user)})