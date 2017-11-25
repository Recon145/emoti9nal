var io = require('socket.io').listen(3000);
	io.sockets.on('connection', function(socket){
		socket.on('mesajgonder', function(data){
			socket.emit('mesajgitti', data)
			socket.broadcast.emit('mesajgitti', data)
		});
});
		
		
