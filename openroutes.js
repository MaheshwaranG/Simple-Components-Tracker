let fs = require("fs");
module.exports = (app, middleware) => {
  app.get("/api/getComponentData", middleware, (req, res) => {
    if (!fs.existsSync(__dirname + "/database/components")) {
      fs.mkdirSync(__dirname + "/database/components");
      console.log("Database irukku");
    }
    if (
      !fs.existsSync(__dirname + "/database/components/ComponentsData.json")
    ) {
      fs.writeFileSync(
        __dirname + "/database/components/ComponentsData.json",
        "{}"
      );
    }

    return res.json({ status: "success" });
  });
};
