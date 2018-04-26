CREATE TABLE USER (
    Id INT  NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(40) NOT NULL,
    LastName VARCHAR(40) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PRIMARY KEY (Id)
);

INSERT INTO USER (FirstName, LastName, Email) VALUES ('Carlos', 'Vargas', 'carlosleonardo@gmail.com');

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
        SELECT * FROM USER WHERE Id = _userId;
    END //
DELIMITER ;

CALL sp_GetUserById(1);

/* POST USER */
DROP PROCEDURE IF EXISTS sp_PostCustomer;
DELIMITER //
CREATE PROCEDURE sp_PostCustomer(IN _FirstName VARCHAR(40), IN _LastName VARCHAR(40), IN _Email VARCHAR(100))
  BEGIN
    INSERT INTO CUSTOMER (FirstName, LastName, Email)
    VALUES (_FirstName, _LastName, _Email);
  END //
DELIMITER ;

/* UPDATE USER */
DROP PROCEDURE IF EXISTS sp_UpdateUser;
DELIMITER //
CREATE PROCEDURE sp_UpdateUser(IN _userId INT, IN _FirstName VARCHAR(40), IN _LastName VARCHAR(40), IN _Email VARCHAR(100))
  BEGIN
    UPDATE USER
    SET FirstName = _FirstName, LastName = _LastName, Email = _Email
    WHERE Id = _userId;
  END //

DELIMITER ;

/* DELETE USER */
DROP PROCEDURE IF EXISTS sp_DeleteUser;
DELIMITER //
CREATE PROCEDURE sp_DeleteUser(IN _userId INT)
  BEGIN
    DELETE FROM USER
    WHERE Id = _userId;
  END //

DELIMITER ;