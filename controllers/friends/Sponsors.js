const { getAllSponsors } = require("../../service/modules/info");

const Sponsors = async (req, res, next) => {
  try {
    const sponsors = await getAllSponsors();
    res.status(200).json(sponsors);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "not found",
    });
  }
};

module.exports = Sponsors;
