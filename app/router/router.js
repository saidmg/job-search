
require("dotenv").config();
const orm = require("../models/orm");
const db = require("../config/connection.js")(
  process.env.DB_HOST,
  process.env.DB_PASS
);
//Runs when client connects

function router(app) {

}

module.exports = router;
