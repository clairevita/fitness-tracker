const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //type
    //weight:
        //name
        //weight
        //sets
        //reps
        //resistance
    //cardio:
        //name
        //duration
        //distance

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;