// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Setup Server
const server = app.listen(port, listening);
 
function listening(){
     console.log(server);
    console.log(`running on localhost: ${port}`);
  };

//Get Route
app.get('/getting' , dataSending);
//callback function
function dataSending(req,res){
    res.send(projectData);
}

//Post Route
app.post('/posting' , function (req , res){
    projectData = req.body;
    res.send(projectData);
})
