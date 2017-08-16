
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'jhallman5@gmail.com', name: 'jhallman5', password: '$2a$12$wEPq1hP7bnFat.s3ajqXFO4E973aHbrZpIUcR79S6CncDeVlbTtai', member_since: '1996-10-30'},
        { email: 'steven4@gmail.com', name: 'steven4', password: '$2a$12$XqjWsYyQZ9Ka/6j/Pz3ZJuZHgFWJxw.i67rK/bhdVmQRmjUv4NswG', member_since: '1998-01-03'},
        { email: 'lisa3@gmail.com', name: 'lisa3', password: '$2a$12$AsfvmtlXl0NXmb95iW.c7eCpkvbffFHKIyhZOtZddQyWcY1MfjM9i', member_since: '2001-08-17'},
      ]);
    });
};

//password for jhallman5 = tomato
//password for steven4 = orange
//password for lisa3 = banana
