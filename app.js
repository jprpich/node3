const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
    res.send("<h1>Hola "+ req.params.nombre.charAt(0).toUpperCase() + req.params.nombre.slice(1) + "!</h1>")
})

app.listen(3000, ()=> console.log("ready"));