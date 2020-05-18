const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const convertEmptyStringsToNull = require('./utils/middlewares/convertEmptyStringsToNull');
const BaseRouter = require('./routes');

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(convertEmptyStringsToNull);

// routes APIs
app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api', BaseRouter);

// server
const PORT = process.env.port;
const HOST = process.env.host;

app.listen(PORT, function () {
  console.log(`Server listening on ${HOST}:${PORT}/`);
});
