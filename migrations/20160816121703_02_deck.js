
exports.up = function(knex, Promise) {
    return knex.schema.createTable('deck', function(table){
      table.increments();
      table.string('name');
      table.string('card_total');
      table.integer('created_id');
      table.integer('difficulty');
      table.integer('studyCount');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('deck');
};
