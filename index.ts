import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/find', (req, res) => {
  res.render('find', { nick: req.query.nick, });
});

io.sockets.on('connection', (socket) => {
  socket.on('create', (data) => {
    io.emit('newRoom', data);
  });
});

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});
