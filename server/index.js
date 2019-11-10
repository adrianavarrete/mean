const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
var path = require('path');

const { mongoose } = require('./database'); //solo requerimos el export indicado en el archivo database

// Settings
app.set('port',process.env.PORT || 3000);

// Middlewares, ayuda para entender los datos 
app.use(morgan('dev')); // nos chiva las peticiones HTTP
app.use(express.json()); // para entender JSON
app.use(cors());

//Routes
app.use('/api/employees',require('./routes/employee.routes'))
app.use(express.static(__dirname + '/dist/frontend'))
app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})