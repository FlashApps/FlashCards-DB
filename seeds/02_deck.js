var find = require('../helper');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').select()
  .then(function(students) {
      return knex('deck').del()
      .then(function () {
          return Promise.all([
              // Inserts seed entries
              knex('deck').insert({name: 'Javascript', card_total: 10, created_id: find.findStudentId('tttim', students), difficulty: 0, studyCount: 0}),
              knex('deck').insert({name: 'Angular', card_total: 10, created_id: find.findStudentId('wesleysnipes', students), difficulty: 0, studyCount: 0}),
              knex('deck').insert({name: 'Angular2', card_total: 10, created_id: find.findStudentId('rayray', students), difficulty: 0, studyCount: 0})
          ]);
      });
  })
};
