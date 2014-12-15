var express = require('express');
var router = express.Router();
var Model = require('./userModel');

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
 	new Model.User().fetchAll()
    .then(function(users) {
      	res.send(users.toJSON());
    }).catch(function(error) {
      	console.log(error);
      	res.send('An error occured');
    });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    new Model.User({
        username: req.body.username,
        email: req.body.email,
        full_name: req.body.full_name,
        age: req.body.age,
        location: req.body.location,
        gender: req.body.gender
    }).save()
    .then(function (user) {
        res.send(
            { msg: '' }
        );
    }).catch(function (error) {
        res.send(
            { msg:'error: ' + error }
        );
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function(req, res) {
    var userId = req.params.id;
    new Model.User().where('ID', userId)
    .destroy()
    .catch(function (error) {
        res.send(
            { msg:'error: ' + error }
        );
    });

    res.send(
        { msg:'' }
    );
});

module.exports = router;