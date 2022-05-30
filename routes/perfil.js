const express = require('express');
const router = express.Router();
const PerfilController = require('../controllers/PerfilController');


router.get('/', PerfilController.index);
router.post('/', PerfilController.index);


module.exports = router;