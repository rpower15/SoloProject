/**
 * ************************************
 *
 * @module  api.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description Sets up express router
 *
 * ************************************
 */

const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/', projectController.getStudent, (req, res) =>
  res.status(200).json('something'),
);

module.exports = router;