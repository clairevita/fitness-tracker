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
            type: String,
            trim: true,
            required: "Select an exercise type"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;