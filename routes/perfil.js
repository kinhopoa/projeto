const express = require('express');
const router = express.Router();
const PerfilController = require('../controllers/PerfilController');
const upload = require('../middlewares/multer');

router.get('/', upload.single('img-perfil'), PerfilController.index);
router.post('/', upload.single('img-perfil'), PerfilController.index);


module.exports = router;