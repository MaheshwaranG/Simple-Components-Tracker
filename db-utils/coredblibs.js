const fs = require("fs");
const path = require("path");

const db = {
  isDbExist,
  isTableExist,
  createDB,
  createTable,
  findAll,
  getSchema,
  readTableData,
  writeTableData,
  insert,
  update
};

// return status Code
// 0 operation failed
// 1 operation success
// 2 operation success and no changes in exist db

const dbBase = path.join(__dirname + "/../database/");

function isDbExist(name) {
  let dbName = path.join(dbBase + name);
  if (fs.existsSync(dbName)) {
    return true;
  }
  return false;
}

function isTableExist(database, name) {
  let tableName = dbBase + database + "/" + name + ".json";
  if (fs.existsSync(tableName)) {
    return true;
  }
  return false;
}

async function createDB(name, options) {
  let dbName = path.join(dbBase + name);
  console.log("asd " + dbName);
  try {
    if (!fs.existsSync(dbName)) {
      fs.mkdirSync(dbName);
      return Promise.resolve({ status: 1, name });
    } else {
      return Promise.resolve({ status: 2, name });
    }
  } catch (err) {
    return Promise.resolve({ status: 0, name, error: err });
  }
}

async function createTable(database, name, schema) {
  let tableName = dbBase + database + "/" + name + ".json";
  console.log("Util schema : " + JSON.stringify(schema));
  let data = await createDB(database);
  if (data.status === 0) {
    console.log("Sample Test ");
    return Promise.resolve({
      status: 0,
      table: namge,
      error:
        "Db Not Exist. Internal Db error while creating Database : " +
        database +
        " - " +
        data.error
    });
  } else {
    try {
      if (!fs.existsSync(tableName)) {
        if (schema) {
          let schemaData = {
            data: {},
            schema
          };
          fs.writeFileSync(tableName, JSON.stringify(schemaData));
        } else {
          let schemaData = {
            data: {},
            schema: {}
          };
          fs.writeFileSync(tableName, JSON.stringify(schemaData));
        }
        return Promise.resolve({ status: 1, name });
      } else {
        return Promise.resolve({ status: 2, name });
      }
    } catch (err) {
      return Promise.resolve({ status: 0, table: name, error: err });
    }
  }
}

async function readTableData(tableName, type) {
  if (fs.existsSync(tableName)) {
    let tableData = JSON.parse(fs.readFileSync(tableName));
    let data = {};
    if (type === "data") {
      data = tableData.data;
    } else if (type === "schema") {
      data = tableData.schema;
    } else {
      data = tableData;
    }
    return Promise.resolve({ status: 1, table: data });
  }
  return Promise.resolve({
    status: 0,
    table: {},
    error: "File Table Not Found For Reading"
  });
}

async function writeTableData(tableName, data, id) {
  if (fs.existsSync(tableName)) {
    let tableCurrentDataStatus = await readTableData(tableName);
    if (tableCurrentDataStatus.status > 0) {
      let tableCurrentData = tableCurrentDataStatus.table.data;
      if (id !== undefined && id !== null && typeof id === "string") {
        let updatedData = tableCurrentData[id];
        Object.keys(data).forEach(key => {
          updatedData[key] = data[key];
        });
        tableCurrentData[id] = updatedData;
      } else if (
        id !== undefined &&
        id !== null &&
        typeof id === "boolean" &&
        id
      ) {
        Object.keys(data).forEach(mainkey => {
          if (tableCurrentData[mainkey] === undefined) {
            tableCurrentData[mainkey] = data[mainkey];
          } else {
            let updatedData = tableCurrentData[mainkey];
            Object.keys(updatedData).forEach(key => {
              updatedData[key] = data[mainkey][key];
            });
            tableCurrentData[mainkey] = updatedData;
          }
        });
      } else {
        Object.keys(data).forEach(key => {
          tableCurrentData[key] = data[key];
        });
        // console.log(JSON.stringify(tableCurrentDataStatus.table));
      }
      tableCurrentDataStatus.table.data = tableCurrentData;
      fs.writeFileSync(tableName, JSON.stringify(tableCurrentDataStatus.table));
      return Promise.resolve({ status: 1, table: data });
    }
    return Promise.resolve({
      status: 0,
      table: {},
      error: "File Table Read Error " + error
    });
  }
  return Promise.resolve({
    status: 0,
    table: {},
    error: "File Table Not Found For Writing"
  });
}

async function findAll(database, table) {
  let tableName = dbBase + database + "/" + table + ".json";
  let data = await readTableData(tableName, "data");
  return Promise.resolve(data);
}

async function getSchema(database, table) {
  let tableName = dbBase + database + "/" + table + ".json";
  let data = await readTableData(tableName, "schema");
  return Promise.resolve(data);
}

async function insert(database, table, data) {
  let tableName = dbBase + database + "/" + table + ".json";
  let newData = await writeTableData(tableName, data);
  return Promise.resolve(newData);
}

async function update(database, table, data, id) {
  let tableName = dbBase + database + "/" + table + ".json";
  let newData = await writeTableData(tableName, data, id);
  return Promise.resolve(newData);
}

async function start() {
  await createDB("cortex-app").then(data =>
    console.log("AAAA   " + JSON.stringify(data))
  );
  await createTable("cortex-app", "components", {
    sadasdas: {
      name: "mahesh",
      id: "2174"
    }
  }).then(data => console.log("sdfsdf " + JSON.stringify(data)));

  await insert("cortex-app", "components", {
    aaaa: { a: "1", b: "", c: "54" },
    bbbb: { c: "afd", d: "erewrre" },

    bbb: "@#32fds542s"
  });
  await update(
    "cortex-app",
    "components",
    {
      aaaa: { a: "1", b: "", c: "54" },
      bbbb: { c: "353dgd", d: "ere54zddswrre" },
      cccc: { ssds: "dshdfs" }
    },
    true
  );
  await getSchema("cortex-app", "components").then(data => {
    console.log(JSON.stringify(data));
  });
  findAll("cortex-app", "components").then(data =>
    console.log(JSON.stringify(data))
  );
}

// export default db;
module.exports = db;
// start();
