
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'dan@gmail.com'},
        {email: 'lily@gmail.com'},
        {email: 'shane@gmail.com'},
        {email: 'ian@gmail.com'},
        {email: 'alice@gmail.com'},
        {email: 'dani@gmail.com'}
      ]);
    });
};
