const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

let allDogs = [];

// Body Parser
app.use(bodyParser());

// EJS
app.set('view engine', 'ejs');

app.listen(8080, (req, res)=>{
  console.log('Listening on port 8080')
})

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/all', (req, res)=>{
  request('https://dog.ceo/api/breeds/list/all', (e, r, body)=>{
    body = JSON.parse(body);
    allDogs = Object.keys(body.message)
    res.render('list', {dogs: allDogs})
  })
})

app.get('/dog/:dog', (req,res)=>{
  let breed = req.params.dog;
  request(`https://dog.ceo/api/breed/${breed}/images`, (e, r, body)=>{
    body = JSON.parse(body);
    pictures = body.message;
    res.render('photos', {pictures: pictures})
  })
})

app.get('/search', (req,res)=>{
  let search = req.query.search;
  let results = [];
  for (let i = 0; i < allDogs.length; i++){
    if (allDogs[i].indexOf(search) > -1){
      results.push(allDogs[i])
    }
  }
  res.render('list', {dogs: results})
})