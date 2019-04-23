const express = require('express');
const bodyParser = require('body-parser'); 
const routes = require('./routes');
const router = express.Router;

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname));


routes(app);
   

app.listen(port, function(){
    console.log('my app is running on: ' + port);
});