const express = require('express');
const routes  = express.Router();

// Basic Get
routes.get('/:userID',(req, res)=>{
  res.send(req.params.userID)
})
// Remember that because of app.use('/users') in server.js, this get endpoint
// actually represents localhost:8080/users/:userID


// Retrieving Data sent via a Form tag query string (see UserForm Component)
routes.get('/form',(req, res)=> {
  res.send(req.query)
})
// Expects a Query String URL; retrieves data using req.query
// http://localhost:8080/users/form?userId=3&userName=Will


// Retrieving Data sent from URL Params
routes.get('/:userID/:personName',(req, res)=>{
  res.send(`User Id is ${req.params.userID} and their name is ${req.params.personName}`)
})
// Expects a URL with Params; retrieve data using req.params
// http://localhost:8080/users/3/Will
// Params can be used with GET, POST, and other HTTP methods

// Retrieving Data from a Post request
routes.post('/user', (req, res)=>{
  user = req.body;
  console.log(req.body)
  res.send(user)
})

module.exports = routes;