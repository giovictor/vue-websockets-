const express = require('express')
const app = express()
const mysql = require('mysql')
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'greenville'
})

db.connect()

const socket = require('socket.io')
const server = app.listen(9000, () => console.log('Connected to port 9000!'))
const io = socket(server)

io.on('connection', (socket) => {
    socket.on('fetchPosts', (data) => {
        io.sockets.emit('fetchPosts', data)
    })

    let sql = 'SELECT * FROM borrower'
    db.query(sql, (err, res) => {
        if(err) console.log(err)
        socket.emit('fetchBorrowers', res)
    })
})