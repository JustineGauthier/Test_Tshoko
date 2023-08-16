const express = require('express');
const bodyParser = require('body-parser');
const corsMiddleware = require('./app/utils/corsMiddleware');
const errorHandler = require('./app/utils/errorHandler');
const artistsRouter = require('./app/routes/artists');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.use(corsMiddleware);
app.use(bodyParser.json());

app.use('/api/artists', artistsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
