const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Static Directory
app.use(express.static(__dirname + './../nodeReview/build'));

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Port
app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

//ROUTES
let userRoutes = require('./routes/userRoutes');

//ENDPOINTS
app.use('/users' , userRoutes);
