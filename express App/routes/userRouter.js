var express = require('express');
var { create, getAll } = require("../controllers/userController")
var router = express.Router();


router.post('/create-user', create)


router.get('/get-all', getAll)



module.exports = router;
