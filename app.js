


const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);
console.log(44555656)

io.on('connection', socket => {
    socket.emit('news', {data:"lululululul"});
    socket.on('event', (data) => { 
        console.log(data)
     });
  });