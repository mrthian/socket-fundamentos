const { io } = require('../server')

// Saber si un usuario se conecta
io.on('connection', (client) => {

    console.log('usuario conectado');

    // enviar mensaje al client
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Welmoce to app'
    });

    // saber si un usuario se deconecto
    client.on('disconnect', () => {
        console.log('usuario disconnect');
    });

    // Escuchar el CLIENT
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        //if (message.usuario) {
        //    callback({ resp: 'El parametro usario llego' });
        //} else {
        //    callback({ resp: 'El paramtro usuario no llego' });
        //};

        // Enviar mensaje a todos los usuarios
        client.broadcast.emit('enviarMensaje', data);
    });
});