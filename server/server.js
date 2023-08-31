/**
 * ************************************
 *
 * @module  server.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description Sets up express router
 *
 * ************************************
 */

const express = require('express');
const app = express();
const path = require('path');

// const apiRouter = require('./routes/api');
const projectController = require('./controllers/projectController');

const PORT = 3000;
console.log('NODE_ENV: ', process.env.NODE_ENV);

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use('/assets', express.static(path.join(__dirname, './assets')));

/**
 * define route handlers
 */

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.use('/assets', express.static(path.join(__dirname, '../assets')));
  app.use(
    '/stylesheets',
    express.static(path.join(__dirname, '../stylesheets')),
  );
  // serve index.html on the route '/'
  app.get('/', projectController.getProjects, (req, res) => {
    console.log(res.locals.projects);
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.get('/project', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../project.html'));
});

app.post('/', projectController.createProject, (req, res) => {
  return res.locals.project;
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for..."),
);

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
// listens on port 3000 --> http://localhost:3000/
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
