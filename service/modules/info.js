const { Sponsors } = require("../schemas/Sponsors");

const getAllSponsors = async () => {
  const sponsors = await Sponsors.find();

  if (!sponsors) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  return sponsors;
};

module.exports = {
  getAllSponsors,
};
