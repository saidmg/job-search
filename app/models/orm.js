require('dotenv').config();
const db = require('../config/connection.js')(
    process.env.NAME,
    process.env.DB_PASS
);

async function getData(){
   return await db.query('select * from job_application order by id desc') ;

}
async function postData(job){
   let result = db.query("INSERT INTO job_application values (?,?,?,?,?,?,?,?,?)",
   [0,job.company, job.location, job.title, job.job_date, job.job_post, job.assessment,false ,'pending' ] );

}

module.exports = {
    getData,
    postData
};
