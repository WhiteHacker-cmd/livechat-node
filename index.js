const express = require("express")

const app = express()

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 4000



app.get('/', (req, res)=>{

    res.sendFile(__dirname + '/index.html')
})


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', msg => {
    io.emit('chat message', msg);
    });
  });


server.listen(PORT, ()=> console.log(`Socket.IO server running at http://localhost:${PORT}/`))