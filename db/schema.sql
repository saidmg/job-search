DROP DATABASE IF EXISTS jobs_tracking;
CREATE DATABASE jobs_tracking;
USE jobs_tracking;
CREATE TABLE job_application(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  company varchar(40),
  location varchar(20),
  title varchar(30),
  date Date,
  job_post varchar(60),
  assessment varchar(60),
  status varchar(15),
  PRIMARY KEY (id)
);