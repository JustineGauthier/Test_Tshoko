const fs = require('fs').promises;
const artistModel = require('../models/artistModel');
const path = require('path');

let artists = [];

(async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../../artists.json'), 'utf-8');
    artists = JSON.parse(data);
  } catch (error) {
    console.error('Erreur lors du chargement des artistes :', error);
  }
})();

exports.getAllArtists = (req, res) => {
  res.json(artists);
};

exports.getArtistById = (req, res) => {
  const id = req.params.id;
  const artist = artists.find(artist => artist.id === parseInt(id));

  if (artist) {
    res.json(artist);
  } else {
    res.status(404).json({ message: 'Artiste non trouvé' });
  }
};

exports.addArtist = (req, res) => {
  const newArtist = req.body;
  newArtist.id = artists.length + 1;
  artists.push(newArtist);
  res.status(201).json(newArtist);
};

exports.deleteArtist = (req, res) => {
  const id = parseInt(req.params.id);
  const artistIndex = artists.findIndex(artist => artist.id === id);

  if (artistIndex !== -1) {
    const deletedArtist = artists.splice(artistIndex, 1);
    res.json(deletedArtist[0]);
  } else {
    res.status(404).json({ message: 'Artiste non trouvé' });
  }
};
