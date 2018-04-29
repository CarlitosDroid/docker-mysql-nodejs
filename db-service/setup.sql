CREATE TABLE USER (
    id INT  NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(40) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO USER (firstName, lastName, email) VALUES ('Carlos', 'Vargas', 'carlosleonardo@gmail.com');

/* GET ALL USERS */
DROP PROCEDURE IF EXISTS sp_GetUser;
DELIMITER //
CREATE PROCEDURE sp_GetUser()
    BEGIN
        SELECT * FROM USER;
    END //
DELIMITER ;

CALL sp_GetUser();

/* GET USER BY ID */
DROP PROCEDURE IF EXISTS sp_GetUserById;
DELIMITER //
CREATE PROCEDURE sp_GetUserById (IN _userId varchar(40))
    BEGIN
        SELECT * FROM USER WHERE id = _userId;
    END //
DELIMITER ;

CALL sp_GetUserById(1);

/* POST USER */
DROP PROCEDURE IF EXISTS sp_PostUser;
DELIMITER //
CREATE PROCEDURE sp_PostUser(IN _firstName VARCHAR(40), IN _lastName VARCHAR(40), IN _email VARCHAR(100))
  BEGIN
    INSERT INTO USER (firstName, lastName, email)
    VALUES (_firstName, _lastName, _email);
  END //
DELIMITER ;

/* UPDATE USER */
DROP PROCEDURE IF EXISTS sp_UpdateUser;
DELIMITER //
CREATE PROCEDURE sp_UpdateUser(IN _userId INT, IN _firstName VARCHAR(40), IN _lastName VARCHAR(40), IN _email VARCHAR(100))
  BEGIN
    UPDATE USER
    SET firstName = _firstName, lastName = _lastName, email = _email
    WHERE Id = _userId;
  END //

DELIMITER ;

/* DELETE USER */
DROP PROCEDURE IF EXISTS sp_DeleteUser;
DELIMITER //
CREATE PROCEDURE sp_DeleteUser(IN _userId INT)
  BEGIN
    DELETE FROM USER
    WHERE id = _userId;
  END //

DELIMITER ;

CALL sp_GetUser()