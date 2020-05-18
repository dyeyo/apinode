const express = require('express');

const router = express.Router();

const classroom = require('../controller/classroom.controller');

router.get('/', function (req, res) {
  classroom.get(req, res);
});

router.get('/:id', function (req, res) {
  classroom.get(req, res);
});

router.post('/', function (req, res) {
  classroom.store(req, res);
});

router.put('/:id', function (req, res) {
  classroom.update(req, res);
});

router.delete('/:id', function (req, res) {
  classroom.delete(req, res);
});

module.exports = router;
