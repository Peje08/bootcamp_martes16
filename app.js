/*import methodOverride from 'method-override';
import cors from 'cors';
import express from 'express';*/

const methodOverride = require('method-override');
const cors = require('cors');
const express = require('express');

const app = express();
const log = console.log;
app.use(cors());
app.use(methodOverride())

let port = process.env.PORT || 3000;

let users = ['bart', 'lisa', 'homero', 'marge', 'maggie'];

app.get("/users", (req, res) =>{
    res.send(users)
});

app.post("/user/create/:nombre", (req, res) => {
    users.push(req.params.nombre);
    res.send('usuario creado');
});

app.delete("/user/delete/:nombre", (req, res) => {
    users = users.filter(el => el != req.params.nombre)
    res.send("usuario eliminado")
});

app.put("/user/change/:nombre/:nombrenuevo", (req, res) => {
    users = users.map(el => (req.params.nombre === el) ? req.params.nombrenuevo : el)
    res.send("nombre cambiado")
})

app.listen(port, () =>{
    log('start server')
})