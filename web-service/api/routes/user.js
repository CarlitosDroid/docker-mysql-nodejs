/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 12/3/16.
 */

var express = require('express');
var router = express.Router();
var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.get('/', function (req, res, next) {
    connection.query('CALL sp_GetUser();', function (error, result, fields) {
        if (error) throw error;

        if(result[0].length== 0){
            res.status(404).send({
                status : "ERROR",
                message: "No existe usuario en Base de Datos"
            });
        }else{
            res.status(202).send({
                status : "SUCCESS",
                message: "User was found",
                data : result[0]
            });
        }
    });
});

router.post('/', function (req, res, next) {
    console.log("FIRSTNAME " + req.body.firstName);
    console.log("FIRSTNAME " + req.body.lastName);
    console.log("FIRSTNAME " + req.body.email);
    connection.query('CALL sp_PostUser(?,?,?);', [
        req.body.firstName,
        req.body.lastName,
        req.body.email
    ], function (error, result, fields) {
        if (error) throw error;

        console.log(result.affectedRows);
        if (result.affectedRows == 1) {
            res.status(201).send({
                status: "SUCCESS",
                message: "User Inserted"
            });
        } else {
            res.status(404).send({
                status: "ERROR",
                message: "Ocurriop un error"
            });
        }
    });
});


router.get('/:userId', function (req, res, next) {
    console.log("AJAJAJ " + req.params.userId)

});

router.put('/:userId', function (req, res, next) {
    
});

router.delete('/:userId', function (req, res, next) {
    
});


module.exports = router;