const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [{
      type: {
        type: String,
        trim: true,
        required: "Provide what type of exercise you are submitting"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise"
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }]
  },
  {
    toJSON: {
      virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;