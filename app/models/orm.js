require('dotenv').config();
const db = require('../config/connection.js')(
    process.env.NAME,
    process.env.DB_PASS
);

async function getData() {
    return await db.query('select * from job_application order by id desc');

}

function deleteData(postId) {
    let result = db.query(`DELETE FROM job_application WHERE id = ${postId} `)
}

function postData(job) {
    let result = db.query("INSERT INTO job_application values (?,?,?,?,?,?,?,?,?)",
        [0, job.company, job.location, job.title, job.job_date, job.job_post, job.assessment, false, 'pending']);

}

function updateStatus(jobStatus,id) {
    let result = db.query(`UPDATE job_application set job_status ='${jobStatus}' WHERE id = ${id} `)
}

function updateData(data, id) {
    let result = db.query(`UPDATE job_application set company ='${data.company}', location = '${data.location}', 
    title = '${data.title}', job_date = '${data.job_date}', job_post = '${data.job_post}', assessment= '${data.assessment}'
    WHERE id = ${id} `)
}

async function getCertainData(id) {
    return await db.query(`SELECT * from job_application WHERE id = ${id}`)
}
module.exports = {
    getData,
    postData,
    deleteData,
    updateData,
    getCertainData,
    updateStatus,
};
