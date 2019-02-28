let mongoose = require('mongoose')


const connectionString = "mongodb://schoolstuff:coffee!@den1.mongo1.gear.host:27001/schoolstuff"
let connection = mongoose.connection


mongoose.connect(connectionString, { useNewUrlParser: true })
connection.on('error', err => {
    console.log("database error", err)
})


connection.once('open', () => {
    console.log('connected to database')
})