const express = require('express')
const app = express()
const bodyParser =  require('body-parser')
const knexFile = require('./knexfile')
const knex = require('knex')(knexFile);
const bookshelf = require('bookshelf')(knex);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser())

app.listen(8080, ()=>{
  console.log('Listening')
})

const User = bookshelf.Model.extend({
  tableName: 'users'
})

// STEP 2 CONNECT API ENDPOINTS TO DB OPERATIONS
app.get('/users', (req, res)=> {
  User
    .fetchAll()
    .then(users =>{
      console.log(users.models)
      res.send(users.models.map(user => user.attributes))
    })
})