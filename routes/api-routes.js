const router = require("express").Router();
const Workout = require("../models/workout.js");

//We need a route for getting our workouts from /api/workouts
//We need a route for PUTTing a working out according to /api/workouts/:id
//We need a route for POSTing a workout
//We need a route for get workouts in a range 

router.get("/api/workouts", (req, res)=>{
    Workout.find({})
    .then(results=>{
        res.json(results);
    })
    .catch(err=>{
        res.json(err);
    });
});

router.put("/api/workouts/:id",({ body, params }, res)=>{
    Workout.findByIdAndUpdate(
        params.id, 
        {$push: {exercises: body}
    })
    .then(results=>{
        res.json(results);
    })
    .catch(err=>{
        res.json(err);
    })
});

router.post("/api/workouts", (req, res)=>{
    Workout.create({});
});

router.get("/api/workouts", (req, res)=>{
    Workout.find();
});

module.exports = router;