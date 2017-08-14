
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'jhallman5@gmail.com', username: 'jhallman5', password: 'tomato', member_since: '1996-10-30'},
        {id: 2, email: 'steven4@gmail.com', username: 'steven4', password: 'orange', member_since: '1998-01-03'},
        {id: 3, email: 'lisa3@gmail.com', username: 'lisa3', password: 'banana', member_since: '2001-08-17'},
      ]);
    });
};
