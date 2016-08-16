var find = require('../helper');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').select()
  .then(function(students) {
      return knex('deck').select()
      .then(function(decks) {
          return knex('student_deck').del()
          .then(function () {
              return Promise.all([
                  // Inserts seed entries
                  knex('student_deck').insert({student_id: find.findStudentId('tttim', students), deck_id: find.findDeckId('Angular', decks)}),
                  knex('student_deck').insert({student_id: find.findStudentId('rayray', students), deck_id: find.findDeckId('Javascript', decks)}),
                  knex('student_deck').insert({student_id: find.findStudentId('wesleysnipes', students), deck_id: find.findDeckId('Angular2', decks)})
              ]);
          });
      })
  })
};
