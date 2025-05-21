const express = require('express');
const path = require('path');
const mysql = require('mysql');//b
const morgan = require('morgan');
const multer = require('multer');//trabajar con fotos
const sharp = require('sharp');//trabajar con fotos
const expressLayouts = require('express-ejs-layouts');

//poder accesar a express
const app = express();

// conexion a base de datos
let conexion = mysql.createConnection({
    host: process.env.PORT|| 'localhost',
    database:process.env.DB_NAME|| 'proyecto2',
    user: process.env.DB_USER||'root',
    password:process.env.DB_PASSWORD|| ''
   
});
// Exporta archivos estáticos (como CSS)
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');


//funciones que procesan cosas
app.use(morgan("dev"));

// rutas

app.get("./index", function(req, res){
    res.render('index');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));



// Importar el router
const indexRouter = require('./router/index_route');

// Conectar el router; todas las rutas definidas en indexRouter se montarán sobre '/'
app.use('/', indexRouter);




// port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Accede a http://localhost:${PORT}`);
})

