/**
 * ************************************
 *
 * @module  projectModels.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description Schema for project template
 *
 * ************************************
 */

const mongoose = require('mongoose');

const MONGO_URI =
  // URI from MongoDB
  '';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'EngineeringProjects',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the projects collection
const projectsSchema = new Schema({
  name: String,
  dateCreated: { type: Date, default: Date.now },
  image: String,
  problem: String,
  ask: String,
  imagine: String,
  plan: String,
  create: String,
  test: String,
  improve: String,
  share: String,
  debrief: String,
  // student_id: {
  //   // type of ObjectId makes this behave like a foreign key referencing the user collection
  //   type: Schema.Types.ObjectId,
  //   ref: 'students',
  // },
});

// create a model for the project collection that will be part of the export
const Project = mongoose.model('projects', projectsSchema);

// create a schema for students and use it to create the model for it below
const studentsSchema = new Schema({
  firstName: String,
  lastName: String,
});

// creats a model for the users collection that will be part of the export
const Student = mongoose.model('students', studentsSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Project,
  Student,
};
