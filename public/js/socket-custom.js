var socket = io();

/**
 * socket.on('', function()); = escuchar server
 * socket.emit('', any?); = Enviar al servidor
 */

// definir la primera función || Escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Conexión perdida');
});

// son para enviar información || con el calllback capturo el mensaje de res
socket.emit('enviarMensaje', {
    usuario: 'ThTehian',
    mensaje: 'Hola Mundo'
}, function() {
    console.log('Se disparo el callback');
});

// Escuchar mensaje del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Info Server: ', mensaje);
});