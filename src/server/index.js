
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request } = require('http');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Setup Server
const port = 3000;
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };
  

//   // GET route
//   const weatherData=[];
  
//   app.get('/all',getData)
  
//   function getData(req,res){
//     res.send(weatherData)
//     console.log(weatherData)
//   }
  
//   //POST route
//   app.post('/addWeather', addWeather);

  
//   function addWeather(req,res){
//     const newEntry = req.body;

//     if (weatherData.length == 0){
//       weatherData.push(newEntry);
//     }
//     else{
//       weatherData[0] = newEntry;    
//     }
   
//     res.end();
// }

module.exports = app;