const schemas = require("./schemas/schemas");
const constants = require("./constants");
const db = require("./db-utils/coredblibs");
const basicTableInit = {
  attributesTable,
  componentsTable
};

async function attributesTable() {
  if (db.isTableExist(constants.DB.CORTEXAPP, constants.Table.ATTRIBUTES)) {
  } else {
    let response = await db.createTable(
      constants.DB.CORTEXAPP,
      constants.Table.ATTRIBUTES,
      schemas.attributes()
    );
    console.log(JSON.stringify(response));
  }
}

async function componentsTable() {
  if (db.isTableExist(constants.DB.CORTEXAPP, constants.Table.COMPONENTS)) {
  } else {
    let response = await db.createTable(
      constants.DB.CORTEXAPP,
      constants.Table.COMPONENTS,
      schemas.components()
    );
    console.log(JSON.stringify(response));
  }
}

attributesTable();
componentsTable();
