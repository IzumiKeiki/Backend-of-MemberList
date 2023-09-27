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

CREATE FUNCTION insert_data(name VARCHAR(255), skills VARCHAR(255), status VARCHAR(255), userID INT)
RETURNS INT
    DETERMINISTIC
BEGIN
  DECLARE insert_success INT DEFAULT 0;

  INSERT INTO `list` (`name`, `skills`, `status`, `userID`)
  VALUES (name, skills, status, userID);

  SET insert_success = ROW_COUNT();

  RETURN insert_success;
END

===

CREATE PROCEDURE update_data (
    IN new_name VARCHAR(60),
    IN new_skills VARCHAR(255),
    IN new_status VARCHAR(45),
    IN current_id INT
)
BEGIN
    UPDATE list
    SET name = new_name, skills = new_skills, status = new_status
    WHERE id = current_id;
END;