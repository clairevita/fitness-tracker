const router = require("express").Router();
const db = require("../models");

//We need a route for getting our workouts from /api/workouts
//We need a route for PUTTing a working out according to /api/workouts/:id
//We need a route for POSTing a workout
//We need a route for get workouts in a range 

router.get("/api/workouts", (req, res)=>{
    db.Workout.find({})
    .then(results=>{
        res.json(results);
    })
    .catch(err=>{
        res.json(err);
    });
});

router.put("/api/workouts/:id",( req, res)=>{
    db.Workout.findByIdAndUpdate(
        req.params.id, 
        {$push: {exercises: req.body}
    })
    .then(results=>{
        res.json(results);
    })
    .catch(err=>{
        res.json(err);
    });
});

router.post("/api/workouts", (req, res)=>{
    db.Workout.create({})
    .then(results=>{
        res.json(results);
    })
    .catch(err=>{
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res)=>{
    db.Workout.find({})
    
    .then(results=>{
        res.json(results);
    })
    .catch(err=>{
        res.json(err);
    });
});

module.exports = router;