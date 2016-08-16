
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student_deck', function(table){
      table.increments();
      table.integer('student_id').references('id').inTable('student').onDelete('cascade');
      table.integer('deck_id').references('id').inTable('deck').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('student_deck');
};
