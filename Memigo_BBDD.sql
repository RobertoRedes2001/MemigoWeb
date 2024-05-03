CREATE DATABASE IF NOT EXISTS memigo_v2;
USE memigo_v2;

CREATE TABLE users (
	 id INT NOT NULL AUTO_INCREMENT,
    uid VARCHAR(16) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    userpfp MEDIUMTEXT NULL,
    creationDate DATETIME NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(18) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE users_roles (
    id_user INT NOT NULL,
    id_role INT NOT NULL,
    PRIMARY KEY (id_user, id_role),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_role) REFERENCES roles(id)
);

CREATE TABLE templates(
    id INT NOT NULL AUTO_INCREMENT,
    template MEDIUMTEXT NOT NULL,
    PRIMARY KEY(id)  
);

CREATE TABLE memes(
    id INT NOT NULL AUTO_INCREMENT,
    userid INT NOT NULL,
    meme MEDIUMTEXT NOT NULL,
    postDesc VARCHAR(255) NULL,
    likes INT NOT NULL DEFAULT 0,
    postDate DATETIME NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
);
