const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercise: [{
        name: {
            type: String,
            trim: true,
            required: "Enter a name for your exercise"
        },
        type: {

        },
        weight: {

        },
        sets: {

        },
        reps: {

        },
        duration: {

        },
        distance: {

        }
    }],
    date: {
        type: Date,
        default: Date.now
    }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;