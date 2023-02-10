const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/saucecontrol');
const likeCtrl = require('../controllers/likesControl');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/', auth, multer, sauceCtrl.createsauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, multer, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, likeCtrl.likeDislikeSauce);

module.exports = router;