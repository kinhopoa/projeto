const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const validateRegister = require('../middlewares/validator')


router.get('/', loginController.index);
router.post('/',validateRegister, loginController.logarUsuario);


module.exports = router;