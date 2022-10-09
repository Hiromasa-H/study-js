import express from 'express'

const app = express()

const server = require('http').createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['*'],//本来は GET などと許されるメソッドを明記する
  },
})
// 接続した瞬間に実行される
io.on('connection', (socket:any) => {
  socket.on('message', (msg:any) => {
    console.log(msg)
    io.emit('msg',msg) //emitを使うと全員に送る
  })
})
server.listen(3000)

