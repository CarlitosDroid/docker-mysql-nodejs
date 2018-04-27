/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 12/3/16.
 */

var express = require('express');
var router = express.Router();
var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.get('/', function (req, res, next) {
    connection.query('CALL sp_GetUser();', function (error, result, fields) {
        if (error) throw error;

        if (result[0].length === 0) {
            res.status(404).send({
                status: "ERROR",
                message: "Not found user in Database"
            });
        } else {
            res.status(202).send({
                status: "SUCCESS",
                message: "User was found",
                data: result[0]
            });
        }
    });
});

router.get('/:userId', function (req, res, next) {
    connection.query('CALL sp_GetUserById(?);', [
        req.params.userId
    ], function (error, result, fields) {
        if (error) throw error;

        console.log(result);

        if (result[0].length === 0) {
            res.status(404).send({
                status: "ERROR",
                message: "Not found user in Database"
            });
        } else {
            res.status(202).send({
                status: "SUCCESS",
                message: "User was found",
                data: result[0][0]
            });
        }
    });

});

router.post('/', function (req, res, next) {
    var post = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    };
    connection.query('INSERT INTO USER SET ?', post, function (error, result, fields) {
        if (error) throw error;

        console.log(result);
        if (result.affectedRows === 1) {
            res.status(201).send({
                status: "SUCCESS",
                message: "User Inserted",
                data : {
                    insertId: result.insertId
                }
            });
        } else {
            res.status(404).send({
                status: "ERROR",
                message: "An error occurred."
            });
        }
    });
});

router.put('/:userId', function (req, res, next) {
    connection.query('CALL sp_UpdateUser(?,?,?,?);', [
        req.params.userId,
        req.body.firstName,
        req.body.lastName,
        req.body.email
    ], function (error, result, fields) {
        if (error) throw error;

        console.log(result.affectedRows);
        if (result.affectedRows === 1) {
            res.status(201).send({
                status: "SUCCESS",
                message: "User Updated"
            });
        } else {
            res.status(404).send({
                status: "ERROR",
                message: "An error occurred."
            });
        }
    });
});

router.delete('/:userId', function (req, res, next) {
    connection.query('CALL sp_DeleteUser(?);', [
        req.params.userId
    ], function (error, result, fields) {
        if (error) throw error;

        console.log(result.affectedRows);
        if (result.affectedRows === 1) {
            res.status(201).send({
                status: "SUCCESS",
                message: "User Deleted"
            });
        } else {
            res.status(404).send({
                status: "ERROR",
                message: "An error occurred."
            });
        }
    });
});

module.exports = router;