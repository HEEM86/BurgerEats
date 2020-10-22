-- Drops the burgereats_db if it already exists --
DROP DATABASE IF EXISTS burgereats_db;

-- Create the database burgereats_db and specified it for use.
CREATE DATABASE burgereats_db;

USE burgereats_db;

-- Create the table tasks.
CREATE TABLE burgereats (
  id int NOT NULL AUTO_INCREMENT,
  burgereats_name VARCHAR(55) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);