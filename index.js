const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 4000;

// Crear el servidor de express 
const app = express();

// Base ded atos 
dbConnection();


// corss 
app.use(cors());


// Directorio publico
app.use( express.static('public') );

// Lectura y parseo del body 
app.use( express.json() );


// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));




// Escuchar peticiones 
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});