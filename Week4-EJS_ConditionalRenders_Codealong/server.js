const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// Body Parser
app.use(bodyParser())

// EJS
app.set('view engine', 'ejs');

// Log In Data
let logIn = false;

// Rendering multiple items in an array
app.get('/', (req, res)=>{
  res.render('index', { allPages: allPages } )
})

// Use a Dynamic URL to access different information
app.get('/pages/:num', (req, res)=>{
  res.render('page', { 
    page: allPages[req.params.num], 
    logIn: logIn
  })
})

// Log In / Log Out
app.post('/login', (req, res)=>{
  logIn = !logIn;
  res.render('page', { 
    page: allPages[req.body.page], 
    logIn: logIn
  })
})

// Data Variables
let page1 = {
    title: 'This is the best page!',
    pageNum: 'Page 1 of 3',
    content: 'Its totally sunny today',
    num: 0
}

let page2 = {
    title: 'This is ACTUALLY the best page!',
    pageNum: 'Page 2 of 3',
    content: 'Everyone is learning so much',
    num: 1
}

let page3 = {
    title: 'Believe it or not this page is even better than the other 2',
    pageNum: 'Page 3 of 3',
    content: 'Dynamic content',
    num: 2
}

// Array of Pages
const allPages = [page1, page2, page3] ;

app.listen(8080, (req, res)=>{
  console.log('Listening on Port 8080')
})