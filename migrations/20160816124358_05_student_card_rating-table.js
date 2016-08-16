
exports.up = function(knex, Promise) {
    return knex.schema.createTable('student_card_rating', function(table){
      table.increments();
      table.integer('student_id').references('id').inTable('student').onDelete('cascade');
      table.integer('card_id').references('id').inTable('card').onDelete('cascade');
      table.integer('rating');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('student_card_rating');
};
