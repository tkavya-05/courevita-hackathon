// pages/api/socket.js
import { Server } from 'socket.io';

export default function SocketHandler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', socket => {
      console.log('User connected');
    });
  }
  res.end();
}
