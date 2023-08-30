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

const { Project } = require('../models/projectModels');
const projectController = {};

projectController.getProjects = (req, res, next) => {
  Project.find({})
    .then(projectDocs => {
      res.locals.projects = projectDocs;
      return next();
    })
    .catch(err => {
      return next({
        log: `projectController.getProjects: ERROR: ${err}`,
        message: {
          err: 'Error occurred in projectController.getProjects. Check server logs for more details',
        },
        status: 500,
      });
    });
};

projectController.createProject = (req, res, next) => {
  const {
    name,
    dateCreated,
    problemg,
    ask,
    imagine,
    plan,
    create,
    test,
    improve,
    share,
    debrief,
    student_id,
  } = req.body;
  Project.create({
    name,
    dateCreated,
    problemg,
    ask,
    imagine,
    plan,
    create,
    test,
    improve,
    share,
    debrief,
    student_id,
  })
    .then(projectDoc => {
      res.locals.project = projectDoc;
      return next();
    })
    .catch(err => {
      return next({
        log: `projectController.createProject: ERROR: ${err}`,
        message: {
          err: 'Error occurred in projectController.createProject. Check server logs for more details',
        },
        status: 500,
      });
    });
};

projectController.deleteProject = (req, res, next) => {
  const _id = req.query.id;
  Project.deleteOne({ _id })
    .then(projectDoc => {
      res.locals.project = projectDoc;
      return next();
    })
    .catch(err => {
      return next({
        log: `projectController.deleteProject: ERROR: ${err}`,
        message: {
          err: 'Error occurred in projectController.deleteProject. Check server logs for more details',
        },
        status: 500,
      });
    });
};

module.exports = projectController;
