const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser());

app.listen(8080, (req, res)=>{
  console.log('Listening')
})

let users = [];

app.post('/signup', (req, res)=> {
  bcrypt.genSalt(10, (err, salt)=> {
    bcrypt.hash(req.body.password, salt, (err, hash)=> {
      users.push({
        username: req.body.username,
        password: hash
      })
      console.log(users)
      res.send('Password Encrypted')
    })
  })
})

app.post('/login', (req, res)=>{
  let storedUser = users.filter((user)=> 
    user.username === req.body.username)[0]
  bcrypt.compare(req.body.password, storedUser.password, (err, result)=>{
    res.send(result)
  })
})


// ON Front End:

// axios.post('/login', {
//    username: this.state.username,
//    password: this.state.password})
//    .then( res => {
//      if (res.data.loggedIn){
//        this.props.location.push('/profilePage')
//    } else {
//        this.props.location.push('/errorPage')
//    }    
// })

// ^^^^^^ this.props.location.push might be wrong I can't remember
// the exact react router method but you get the idea