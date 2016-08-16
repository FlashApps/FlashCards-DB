var find = require('../helper');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student_card_rating').del()
  .then(function() {
      return knex('student').select()
      .then(function(students) {
          return knex('card').select()
          .then(function(cards) {
              return Promise.all([
                  // Inserts seed entries
                  knex('student_card_rating').insert({ student_id: find.findStudentId('tttim', students), card_id: find.findCardId('Is Angular2 better than Angular1?', cards), rating: 0}),
                  knex('student_card_rating').insert({ student_id: find.findStudentId('tttim', students), card_id: find.findCardId('What is an the basic unit of an Angular2 app?', cards), rating: 0}),
                  knex('student_card_rating').insert({ student_id: find.findStudentId('tttim', students), card_id: find.findCardId('What company is in charge of Angular2?', cards), rating: 0})
              ]);
          })
      })
  })
};
