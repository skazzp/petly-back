const googleRedirect = (req, res) => {
  const token = req.user.token;
  res.redirect(
    "http://localhost:3000/petly-front/google-redirect" + `?token=${token}`
  );
};
module.exports = googleRedirect;
