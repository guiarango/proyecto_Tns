const path = require("path");

homeController = {
  displayHome: function (req, res) {
    res.render("homeTennis");
  },
};

module.exports = homeController;
