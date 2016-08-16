
module.exports = {
  findStudentId: function(student, list) {
        for (var i = 0; i < list.length; i++) {
          if (student === list[i].username) {
            return list[i].id;
          }
        }
    },
    findDeckId: function(deck, list) {
          for (var i = 0; i < list.length; i++) {
            if (deck === list[i].name) {
              return list[i].id;
            }
          }
      },
      findCardId: function(cardFront, list) {
            for (var i = 0; i < list.length; i++) {
              if (cardFront === list[i].front) {
                return list[i].id;
              }
            }
        }

}
