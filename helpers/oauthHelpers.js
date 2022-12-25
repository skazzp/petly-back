const passport = require("passport");
const { addOauthUser } = require("../service/modules/auth");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3030/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      await addOauthUser(profile);
      return done(null, profile);
    }
  )
);

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

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
