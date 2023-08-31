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
const { path } = require('../server');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

router.get('/projectCard', projectController.getProjects, (req, res) => {
  return res.status(200).send(res.locals.projects);
});

module.exports = router;
