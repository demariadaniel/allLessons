const express = require('express');
const app = express();



// EXPRESS
app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});


// express.static
app.use(express.static(__dirname + './../nodeReview/build'));
// Serves static files, looking for an index.html file
//	 This is necessary when using Node with a basic html/javascript/jquery 
//	 You will NOT use this when working on your app using create-react-app & 'npm start'.
//	 However, when you are ready to deploy your React site online you will need to run 'npm build' and
//	 then include this line with the path to your 'build' folder. 
//	 (You will read more about this in the Portal later, under Deployment)

// express.static requires an absolute path to the folder that contains your index.html file
//	 __dirname represents the path to the current directory
//	 './' is the relative path to this directory, '../' means one level out of this directory
//	 ...so __dirname + './../nodeReview/build' means this directory


// bodyParser
const bodyParser = require('body-parser');
// Allows you to access data sent across request body
//	 *** COMMON ERROR ***
//	 If req.body == undefined at one of your endpoints, make sure you have bodyParser in your project
//	 bodyParser.json and bodyParser.urlencoded will remove warnings in the console but are not 100% necessary

// app.use(bodyParser());		
// ^^^^ Works, but creates error messages, so commented out
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Prevents CORS errors when sending request from front end to server
// Sample error:
//		 XMLHttpRequest cannot load http://localhost:8080/users/0/Jin.
//		 No 'Access-Control-Allow-Origin' header is present on the requested resource.
//	Standard browser feature to prevent cross-origin attacks, i.e. evilSite.com making a request to your bank
//	Read more: https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/

// For our front end app, not necessary for your project!
let user = {'userId': 0, 'userName': "Jin"};
userArray = [user]

// Basic Get Endpoint
app.get('/home',(req, res)=> {
  console.log(req)
  res.send('Homepage!')
// *** Common Error ***: Can't set headers after they are sent.
// This error occurs if you use the res object more than once!
})

//ROUTES
let userRoutes = require('./routes/userRoutes');

//ENDPOINTS
app.use('/users' , userRoutes);
// All requests for endpoints prefixed with /users will be handled by this file
// i.e. axios.get('http://localhost:8080/users/getAllUsers')

