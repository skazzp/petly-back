const passport = require("passport");
require("../helpers/oauthHelpers");
const googleAuthenticate = (req, res, next) => {
  passport.authenticate("google", { scope: ["email", "profile"] });
  next();
};

const googleRedirectMiddelware = (req, res, next) => {
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/petly-front/signup",
  });
  console.log(req.user);
  next();
};

module.exports = {
  googleAuthenticate,
  googleRedirectMiddelware,
};
