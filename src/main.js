// npm init -y
// npm i
// npm install express
// npm i pug

const express = require('express')
const app = express()
const productos = []

app.use(express.urlencoded({ extended: true }))
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('productos', { productos })
})

app.post('/productos', (req, res) => {
    let productos = [
        {nombre: 'Escuadra', precio: 20, foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Squadra_45.jpg/640px-Squadra_45.jpg"}, 
        {nombre: 'Regla', precio: 10, foto: "https://image.shutterstock.com/image-vector/school-measuring-plastic-ruler-20-260nw-615662024.jpg"}, 
        {nombre: 'Compás', precio: 20, foto: "https://thumbs.dreamstime.com/b/comp%C3%A1s-de-dibujo-aislado-rojo-132996590.jpg"}
    ]
    productos.push(req.body)
    console.log(productos)
    res.render('historial', { productos })
})


/* -------------- Server listen ------------------------------------*/
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))