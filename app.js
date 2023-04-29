const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/vistas');



app.use(express.static(__dirname + "/public"))

app.get('/', (req ,res) => {
    res.render("index", {titulo : "prueba"})
})


app.get('/', (req ,res) => {
    res.send("mi respuesta es")
})

app.get('/', (req ,res) => {
    res.render("index", {titulo : "prueba"})
})


app.listen(port, ()=>{
    console.long('Servidor a su servicio en el puerto', port)
})


app.use(express.static(__dirname + "/public"))


