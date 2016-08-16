
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student', function(table){
      table.increments();
      table.string('username');
      table.string('password');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('student');
};
