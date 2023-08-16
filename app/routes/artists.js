const express = require('express');
const artistsController = require('../controllers/artistsController');

const router = express.Router();

router.get('/', artistsController.getAllArtists);
router.get('/:id', artistsController.getArtistById);
router.post('/', artistsController.addArtist);
router.delete('/:id', artistsController.deleteArtist);

module.exports = router;
