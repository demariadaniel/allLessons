const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = []

app.use(bodyParser())

app.listen(8080, (req, res)=>{
  console.log('Server running on port 8080')
})

app.post('/newUser', (req, res)=>{
  console.log(req.body)
  let newUser = new User(
    req.body.username, 
    req.body.course, 
    req.body.pet)
  console.log(newUser.sayName())
  users.push(newUser)

  res.send({message: 'Success!'})
})

app.get('/users', (req, res)=>{
  res.send({data: users})
})

app.get('/', (req, res) => {
  return  res.sendFile(__dirname + '/public/index.html');
})


function User (username, course, pet){
  this.username = username;
  this.course = course;
  this.pet = pet;
  this.sayName = function(){
    console.log(`Hey I'm ${this.username} and I am a ${this.course} student. I have a pet ${this.pet}!!`)
  }
}