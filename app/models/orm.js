require('dotenv').config();
const db = require('../config/connection.js')(
    process.env.NAME,
    process.env.DB_PASS
);


module.exports = {

};
