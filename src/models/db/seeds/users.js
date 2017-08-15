
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'jhallman5@gmail.com', name: 'jhallman5', password: 'tomato', member_since: '1996-10-30'},
        { email: 'steven4@gmail.com', name: 'steven4', password: 'orange', member_since: '1998-01-03'},
        { email: 'lisa3@gmail.com', name: 'lisa3', password: 'banana', member_since: '2001-08-17'},
      ]);
    });
};
