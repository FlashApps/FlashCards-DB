
exports.up = function(knex, Promise) {
    return knex.schema.createTable('card', function(table){
      table.increments();
      table.text('front');
      table.text('back');
      table.integer('deck_id').references('id').inTable('deck').onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('card');
};
