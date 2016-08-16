var find = require('../helper');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('deck').select()
  .then(function(decks) {
      return knex('card').del()
      .then(function () {
          return Promise.all([
              // Inserts seed entries
              knex('card').insert({front: 'Is Angular2 better than Angular1?', back: 'Yes', deck_id: find.findDeckId('Angular2', decks)}),
              knex('card').insert({front: 'What is an the basic unit of an Angular2 app?', back: 'Component', deck_id: find.findDeckId('Angular2', decks)}),
              knex('card').insert({front: 'What company is in charge of Angular2?', back: 'Google', deck_id: find.findDeckId('Angular2', decks)}),
              knex('card').insert({front: 'What is a service in Angular2?', back: 'A place to put business logic that can be injected into multple components', deck_id: find.findDeckId('Angular2', decks)}),
              knex('card').insert({front: 'Does Angular2 use one or two way data-binding?', back: 'One Way', deck_id: find.findDeckId('Angular2', decks)}),
              knex('card').insert({front: 'What is it called when you one way bind data?', back: 'Property Binding', deck_id: find.findDeckId('Angular2', decks)}),
              knex('card').insert({front: 'What is it called when you one way bind events?', back: 'Event Binding', deck_id: find.findDeckId('Angular2', decks)}),
              knex('card').insert({front: 'What is the syntax for property binding?', back: '[] or bind-', deck_id: find.findDeckId('Angular2', decks)}),

              knex('card').insert({front: 'Is Angular1 better than Angular2?', back: 'No', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'What company is in charge of Angular?', back: 'Google', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'What is the general architecture idea that Angular uses?', back: 'MVC or MVVC or MV*', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'Does Angular use one or two way binding?', back: 'Two way binding', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'What is the variable that you bind properties to?', back: '$scope', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'What is the directive to hide or show HTML elements?', back: 'ng-show or ng-hide', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'What kind of app is Angular great for making?', back: 'Single Page Applications', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'Angular question placeholder', back: 'Hard 1', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'Angular question placeholder 2', back: 'Hard 2', deck_id: find.findDeckId('Angular', decks)}),
              knex('card').insert({front: 'Angular question placeholder 3', back: 'Hard 3', deck_id: find.findDeckId('Angular', decks)}),

              knex('card').insert({front: 'What type of programming language is Javascript?', back: 'Functional and Object Oriented', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'What is a fat arrow?', back: 'Alternate function declaration syntax that allows lexical scoping', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'What are the types in Javascript?', back: 'Object, String, Number, Boolean, Null, Undefined', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'Is Javascript case sensitive?', back: 'Yes', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: "2+'2'=", back: '22', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'What is the shortest syntax for incrementing a number by one', back: 'number++', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'What are three conditionals?', back: 'If/else, switch, ternaries', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'Alert Syntax', back: 'alert("best")', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'How do you signal function end?', back: 'return statement', deck_id: find.findDeckId('Javascript', decks)}),
              knex('card').insert({front: 'How do you grab length of string or array?', back: 'length', deck_id: find.findDeckId('Javascript', decks)}),
          ]);
      });
  })
};
