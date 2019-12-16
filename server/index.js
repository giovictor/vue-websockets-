const express = require('express')
const app = express()
const socket = require('socket.io')
const server = app.listen(9000, () => console.log('Connected to port 9000!'))
const io = socket(server)

io.on('connection', (socket) => {
    socket.on('fetchPosts', (data) => {
        io.sockets.emit('fetchPosts', data)
    })
})