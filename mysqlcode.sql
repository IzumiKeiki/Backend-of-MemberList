CREATE SCHEMA `memberlist` ;

CREATE TABLE `memberlist`.`list` (
  `name` VARCHAR(60) NOT NULL,
  `skills` VARCHAR(255) NULL,
  `status` VARCHAR(45) NULL);

SELECT * FROM list;

INSERT INTO list (name, skills, status) VALUES ('xyz', 'sql', 'active');

ALTER TABLE memberlist.list
ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST;