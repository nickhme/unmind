'use strict';


var mongoose = require('mongoose'),
  Mood = mongoose.model('Moods');

exports.list_all_moods = function(req, res) {
  Mood.find({}, function(err, mood) {
    if (err)
      res.send(err);
    res.json(mood);
  });
};




exports.create_a_mood = function(req, res) {
  var new_mood = new Mood(req.body);
  new_mood.save(function(err, mood) {
    if (err)
      res.send(err);
    res.json(mood);
  });
};


exports.read_a_mood = function(req, res) {
  Mood.findById(req.params.moodId, function(err, mood) {
    if (err)
      res.send(err);
    res.json(mood);
  });
};


exports.update_a_mood = function(req, res) {
  Mood.findOneAndUpdate({_id: req.params.moodId}, req.body, {new: true}, function(err, mood) {
    if (err)
      res.send(err);
    res.json(mood);
  });
};


exports.delete_a_mood = function(req, res) {


  Mood.remove({
    _id: req.params.moodId
  }, function(err, mood) {
    if (err)
      res.send(err);
    res.json({ message: 'Mood successfully deleted' });
  });
};
