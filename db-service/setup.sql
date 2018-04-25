CREATE TABLE USER (
    Id INT  NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(40) NOT NULL,
    LastName VARCHAR(40) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PRIMARY KEY (Id)
);

INSERT INTO USER (FirstName, LastName, Email) VALUES ('Carlos', 'Vargas', 'carlosleonardo@gmail.com');


DROP PROCEDURE IF EXISTS sp_GetUser;
DELIMITER //
CREATE PROCEDURE sp_GetUser()
    BEGIN
        SELECT * FROM USER;
    END //
DELIMITER ;

CALL sp_GetUser();
