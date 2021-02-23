const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
  day: {
    type: Date,
    default: new Date()
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true
      },

      name: {
        type: String,
        trim: true,
        required: true
      },

      duration: {
        type: Number,
        required: true,
      },

      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ],
},
{
  toJSON: {
    virtuals: true,
  }
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;