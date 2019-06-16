const db = require("./db-utils/coredblibs");
const constants = require("./constants");

module.exports = (app, middleware) => {
  app.get("/api/getComponentData", middleware, async (req, res) => {
    if (db.isTableExist(constants.DB.CORTEXAPP, constants.Table.COMPONENTS)) {
      let data = await db.findAll(
        constants.DB.CORTEXAPP,
        constants.Table.COMPONENTS
      );
      return res.json(data);
    } else {
      return res.json({ status: "success@#@@" });
    }
  });

  app.post("/api/insertSingleAttribute", middleware, (req, res) => {
    console.log("--=== " + JSON.stringify(req.body));
    db.insert(constants.DB.CORTEXAPP,
      constants.Table.ATTRIBUTES, req.body)
    return res.json({ status: "insert Single Attribute" });
  });
};
