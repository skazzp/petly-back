const express = require("express");
const passport = require("passport");
const {
  googleAuthenticate,
  googleRedirectMiddelware,
} = require("../../middlewares/authGoogleMiddleware");
require("../../helpers/oauthHelpers");
const errorHandler = require("../../helpers/errorHandler.js");
const googleRedirect = require("../../controllers/google/googleRedirect");
const router = express.Router();
router.get("/auth/google", googleAuthenticate);
// router.get("/google/callback", googleRedirectMiddelware, (req, res) => {
//   const token = req.user.token;
//   res.redirect(
//     "http://localhost:3000/petly-front/google-redirect" + `?token=${token}`
//   );
// });

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/petly-front/signup",
  }),
  googleRedirect
);

module.exports = router;
