const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


var mensajes = [{
	
	id:1,
	text: "esto es un mensaje",
	autor: "Ale"
}];


app.use(express.static('public'))


app.get('/', function(req, res){

	res.status(200).send("esta funcionando");

});

io.on('connection', function(socket){
	socket.emit('message', mensajes);

	socket.on('newMessage', function(data){

		mensajes.push(data);
		io.sockets.emit('message', mensajes);
	})
})

server.listen('3000', function(){

	console.log('el servidor esta corriendo en el puerto 3000')

})