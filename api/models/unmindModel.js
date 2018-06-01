'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MoodSchema = new Schema({
  feeling: {
    type: String,
    required: true
  },
  mood: {
    type: Number,
    required: true
  },
  optionalComment: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Moods', MoodSchema);
