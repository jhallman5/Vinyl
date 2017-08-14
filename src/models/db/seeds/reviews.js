
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {user_id: 1, album_id: 2, content:'I don\'t have a seat at the table', created_on: '2011-04-18'},
        {user_id: 1, album_id: 3, content:'MY FAV!', created_on: '2011-07-24'},
        {user_id: 1, album_id: 1, content:'Crapola', created_on: '2011-04-18'},
        {user_id: 3, album_id: 1, content:'Great piece of art.', created_on: '2013-06-03'},
        {user_id: 3, album_id: 3, content:'Oh Lorde', created_on: '2013-06-03'},
        {user_id: 2, album_id: 1, content:'Majin maliBUU.', created_on: '2011-06-05'},
        {user_id: 2, album_id: 2, content:'Cool seating.', created_on: '2012-08-05'},
        {user_id: 2, album_id: 4, content:'WASTED TALENT.', created_on: '2013-12-03'},
        {user_id: 1, album_id: 2, content:'Took a while but I finally got a seat.', created_on: '2017-04-18'},
      ]);
    });
};
