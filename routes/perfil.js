const express = require('express');
const router = express.Router();
const PerfilController = require('../controllers/PerfilController');
const auth = require('../middlewares/auth');


router.get('/', auth, PerfilController.index);
router.post('/', auth , PerfilController.index);


module.exports = router;