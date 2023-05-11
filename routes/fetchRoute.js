var express = require('express');
var router = express.Router();
var fetchController= require('../controllers/fetchController');


router.get('/fetch',fetchController.fetchData);
router.get('/fetchproduct',fetchController.productData)
router.post('/post',fetchController.createData)
router.post('/user',fetchController.createUser)
router.get('/fetchuser',fetchController.fetchUser)
router.post('/login',fetchController.login)
router.delete('/security/:id',fetchController.deleteSecurityProduct)
router.delete('/investigation/:id',fetchController.deleteInvestigationProduct)
router.delete('/user/:id',fetchController.deleteUser)

module.exports = router;
