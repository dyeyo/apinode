const express = require('express');

const router = express.Router();

const test = require('../controller/test.controller');

router.get('/', function (req, res) {
  test.get(req, res);
});

router.get('/:id', function (req, res) {
  test.get(req, res);
});

router.post('/', function (req, res) {
  test.store(req, res);
});

router.put('/:id', function (req, res) {
  test.update(req, res);
});

router.delete('/:id', function (req, res) {
  test.delete(req, res);
});

module.exports = router;
