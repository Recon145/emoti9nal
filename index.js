var io = require('socket.io').listen(3000); //3000 portunu dinlemeye başladık.
    io.sockets.on('connection', function(socket){ // tüm node işlemlerini kapsayan ana fonksiyonumuz
        socket.on('mesajgonder', function(data){ //clientte'ki mesajı aldık
            socket.emit('mesajgitti', data) //server mesajı client'e geri gönderdi emit ile
            socket.broadcast.emit('mesajgitti', data) //
        });
});
