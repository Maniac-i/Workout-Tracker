
const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration',
          },
        },
      },
    ])
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    
    db.Workout.findByIdAndUpdate(req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true},
    )
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  });

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });


}

db.Workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration',
      },
    },
  },
])