/**
 * ************************************
 *
 * @module  projectControllers.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description Creates projectController object and methods
 *
 * ************************************
 */

const { Project, Student } = require('../models/projectModels');
const projectController = {};

projectController.getStudent = (req, res, next) => {
  return next();
};

module.exports = projectController;
