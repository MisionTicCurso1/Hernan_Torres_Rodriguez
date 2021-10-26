const express = require("express");
const mongo = require("./db/conectionDb")
const app = express();
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Orgin', '*');
    res.header('Access-Control-Allow-Headers' , 
    'origin,X-Requested-Width, Content-Type, Accept'
    );
    next();
})
const rutas = require()(app);
mongo.conectar(app);