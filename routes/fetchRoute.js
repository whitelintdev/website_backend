var express = require('express');
var router = express.Router();
var fetchController= require('../controllers/fetchController');


router.get('/fetch',fetchController.fetchData);
router.get('/fetchproduct',fetchController.productData)
router.post('/post',fetchController.createData)
router.post('/user',fetchController.createUser)
module.exports = router;