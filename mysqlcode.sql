CREATE SCHEMA `memberlist` ;

CREATE TABLE `memberlist`.`list` (
  `name` VARCHAR(60) NOT NULL,
  `skills` VARCHAR(255) NULL,
  `status` VARCHAR(45) NULL);

INSERT INTO list (name, skills, status)
VALUES
    ('xyz', 'sql', 'active'),
    ('vue', 'express', 'inactive');

ALTER TABLE list
ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST;

===

  CREATE TABLE `memberlist`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


INSERT INTO user (username,password) VALUES ('dog','pass'), ('cat','pass'), ('hamster','pass');

===

ALTER TABLE list
ADD COLUMN userID INT NOT NULL;

UPDATE list
SET userID = 1
WHERE name IN ('xyz', 'vue');

INSERT INTO list (name, skills, status, userID)
VALUES ('oracle', 'database', 'inactive', 3)

===