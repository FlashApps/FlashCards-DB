
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('student').insert({username: 'tttim', password: 'password'}),
        knex('student').insert({username: 'bjoerger', password: 'password'}),
        knex('student').insert({username: 'rayray', password: 'password' }),
        knex('student').insert({username: 'wesleysnipes', password: 'password'})
      ]);
    });
};
