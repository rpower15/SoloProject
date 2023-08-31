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

router.get('/', projectController.getProjects, (req, res) => {
  console.log(res.locals.projects);
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;
