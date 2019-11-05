const express = require('express');
const hbs = require('express-handlebars');
const Handlebars = require('handlebars');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'store';
const client = new MongoClient(url, { useUnifiedTopology: true });
var db = null;
 
client.connect(function(err){
    if(err){
      console.error(err);
      return;
    }
    db = client.db(dbName);
});

app.use(express.static('public'));
app.engine('handlebars', hbs({
    extname: '.handlebars',
    defaultLayout: '',
    layoutsDir: path.join(__dirname, 'views')
}));

app.set('view engine','handlebars');

app.get('/', function (request, response) {
    response.render('main');
});

app.get('/store', function(request,response){
    const coleccion = db.collection('productos');
    var obj = {}, va = request.query.var;
    if(va !== 'general' && va !== 'ordenar')obj[va] = { '$eq' : request.query.val };
    
    coleccion.find(obj).toArray(function(err,docs){
        if(err){
            console.log(err);
            response.send(err);
            return;
        }
        if(va === 'ordenar') docs.sort((a, b) => {return (a.precio - b.precio)});
        var contexto = {
            productos: docs 
        };
        response.render('aretes', contexto);
    });
});

app.get('/detalle', function(request, response){
    const coleccion = db.collection('productos');
    var prod = request.query.producto;

    coleccion.find( { nombre: { '$eq' : prod} } ).toArray(function(err,docs){
        if(err){
            console.log(err);
            response.send(err);
            return;
        }
        response.render('detalle', { producto: docs, nombre: docs[0].nombre});
    });
});

app.post('/api/AgregarAlCarrito', function(request, response){
    const coleccion2 = db.collection('carrito');
    let titulo = request.body.nombre;
    let cant = request.body.cantidad;
    
    setTimeout(function () {
        for (let i = 0; i < parseInt(cant); i++) {
            coleccion2.insert({nombre: titulo});
        }
    }, 900);
});

Handlebars.registerPartial('nav', `<div class="navBar"><div class="logo"><img class="styleImgLogo" src="./image/imagenes/Logo.png" alt="logo Emilia"></div><div class="navText"><ul class="listText"><li class="barItems"><a class="navBarItems" href="/store?var=general&val=general">Productos</a><ul><li><a href="/store?var=general&val=general">Aretes</a></li><li><a href="">Pulseras</a></li><li><a href="">Collares</a></li><li><a href="">Tobilleras</a></li></ul></li><li class="barItems"><a class="navBarItems" href="#">Tienda</a></li><li class="barItems"><a class="navBarItems" href="#">Contactános</a></li></ul></div><div class="navImg"><ul class="listImg"><li class="barImg"><img class="styleImgMenu" src="./image/imagenes/search.svg" alt=""></li><li class="barImg"><img class="styleImgMenu" src="./image/imagenes/user.svg" alt=""></li><li class="barImg"><img class="styleImgMenu" src="./image/imagenes/shopping-bag.svg" alt=""></li></ul></div></div>`);

Handlebars.registerPartial('foot', `<footer><div class="footerGrupo"><div class="nosotros"><ul class="footerList"><a class="titulo"> <strong>NOSOTROS</strong></a><a class="textoInfo">Nuestra Compañía</a><a class="textoInfo">Ética Empresarial</a><a class="textoInfo">Tiendas y Contácto</a><a class="textoInfo">Compra con Confianza.</a></ul></div><div class="beneficios"><ul class="footerList"><a class="titulo"> <strong>BENEFICIOS</strong></a><a class="textoInfo">Noticias</a><a class="textoInfo">Eventos</a><a class="textoInfo">Obtén Premios</a><a class="textoInfo">Plan de Fidelización</a></ul></div><div class="Contactanos"><ul class="footerList"><a class="titulo"> <strong>CONTÁCTANOS </strong></a><a class="textoInfo">Calle 44a #68a-08 Cali </a><a class="textoInfo">info@accesoriosemilia.com</a><a class="textoInfo">+57 300 342 3657</a></ul></div></div></footer>`);
app.listen(5500);