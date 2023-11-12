CREATE DATABASE famousquotes;
USE famousquotes;

CREATE TABLE authors(
    authorid int AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    PRIMARY KEY (authorid)
);

CREATE TABLE quotes(
    quoteid int AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL,
    authorid int,
    PRIMARY KEY (quoteid),
    FOREIGN KEY (authorid) REFERENCES authors(authorid)
);