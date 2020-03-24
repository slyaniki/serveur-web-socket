const WebSocket = require('ws');
const express = require('express');
 
const app = express();
 
const server = new WebSocket.Server({ server: app.listen(8080) });

server.on('connection', socket => {
    socket.on('message', message => {
      console.log(`received from a client: ${message}`);
    });
    socket.send('Hello world!');
  });