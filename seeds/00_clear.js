exports.seed = function(knex, Promise) {
    return knex.raw('TRUNCATE student, deck, student_deck, card, student_card_rating RESTART IDENTITY CASCADE;');
};
