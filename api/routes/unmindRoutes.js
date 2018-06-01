'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/unmindController');

  // todoList Routes
  app.route('/moods')
    .get(todoList.list_all_moods)
    .post(todoList.create_a_mood);


  app.route('/moods/:moodId')
    .get(todoList.read_a_mood)
    .put(todoList.update_a_mood)
    .delete(todoList.delete_a_mood);
};
