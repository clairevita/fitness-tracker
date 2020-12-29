const router = require("express").Router();
const Workout = require("../models/workout.js");

//We need a route for getting our workouts from /api/workouts
//We need a route for PUTTing a working out according to /api/workouts/:id
//We need a route for POSTing a workout
//We need a route for get workouts in a range