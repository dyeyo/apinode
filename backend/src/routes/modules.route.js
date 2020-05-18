const express = require('express');

const router = express.Router();

const modules = require('../controller/module.controller');

router.get('/', function (req, res) {
  modules.get(req, res);
});

router.get('/:id', function (req, res) {
  modules.get(req, res);
});

router.post('/', function (req, res) {
  modules.store(req, res);
});

router.put('/:id', function (req, res) {
  modules.update(req, res);
});

router.delete('/:id', function (req, res) {
  modules.delete(req, res);
});

module.exports = router;
