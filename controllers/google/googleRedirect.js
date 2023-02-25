const googleRedirect = (req, res) => {
  const token = req.user.token;
  res.redirect(
    "https://skazzp.github.io/petly-front/google-redirect" + `?token=${token}`
  );
};
module.exports = googleRedirect;
