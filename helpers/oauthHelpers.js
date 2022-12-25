const passport = require('passport');
const  {addOauthUser} =  require('../service/modules/auth');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GOOGLE_CLIENT_ID = '982433285201-7qi125v31pfet84sm1p3qtqtnfv6ebeo.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3030/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
 
        await addOauthUser(profile)

        return done(null, user);
   
  }
));

// provider         always set to `google`
// id
// name
// displayName
// birthday
// relationship
// isPerson
// isPlusUser
// placesLived
// language
// emails
// gender
// picture
// coverPhoto

passport.serializeUser(function(user, done) {
done(null, user)

})

passport.deserializeUser(function(user, done) {
    done(null, user)})