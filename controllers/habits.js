const db = require('../models');

const index = (req, res) => {
  db.Habit.find({}, (err, foundHabits) => {
    if (err) console.log('Error in habits index:', err);

    res.status(200).json(foundHabits);
  });
};

const show = (req, res) => {
  db.Habits.findById(req.params.id, (err, foundHabits) => {
    if (err) console.log('Error in habits show', err);

    res.status(200).send(foundHabit);
  });
};

const create = (req, res) => {
  db.Habit.create(req.body, (err, savedHabit) => {
      console.log(`This is a saved habit: `, savedHabit)
    if (err) console.log('Error in habits create:', err);

    res.status(200).json(savedHabit);
  });
};

const update = (req, res) => {
  db.Habit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHabit) => {
    if (err) console.log('Error in habits update:', err);

    if (!updatedHabit) {
      res.status(400).json({message: `Could not find Habit with id ${req.params.id}`});
    }

    res.json(updatedHike);
  });
};

const destroy = (req, res) => {
  db.Hike.findByIdAndDelete(req.params.id, (err, deletedHike) => {
    if (err) console.log('Error in hike destroy:', err);

    res.status(200).json(deletedHike);
  });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
