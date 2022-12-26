const express = require("express");
const passport = require("passport");
require("../../helpers/oauthHelpers");
const googleRedirect = require("../../controllers/google/googleRedirect");
const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://skazzp.github.io/petly-front/register",
  }),
  googleRedirect
);

module.exports = router;
