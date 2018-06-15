const express = require('express');
const app = express();
require('dotenv').config()


app.use(express.static(__dirname + './../build'))

app.listen(process.env.PORT || 8080, () => {
  console.log('Server Started');
	console.log('Press CTRL + C to stop server');
});

app.get('/env', (req, res)=>{
  res.send({"key" : process.env.API_KEY})
})

app.get('*', (req, res) => { 
  res.sendFile('index.html',{root: __dirname + './../build'}) 
});