DROP DATABASE IF EXISTS jobs_tracking;
CREATE DATABASE jobs_tracking;
USE jobs_tracking;
CREATE TABLE job_application(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  company varchar(40),
  location varchar(20),
  title varchar(30),
  job_date varchar(30),
  job_post varchar(100),
  assessment varchar(100),
  assessment_done boolean,
  job_status varchar(15),
  PRIMARY KEY (id)
);
