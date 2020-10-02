const express = require('express');

const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app); // MONTAR EL SERVIDOR

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// estatico
app.use(express.static(publicPath));

// Esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket')


//app.listen(port, (err) => {
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto: ${ port }`);
});