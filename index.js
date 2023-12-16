const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./router')
const path = require('path')


app.use(express.static('public'));
app.use(router())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')



app.listen(port, () => console.log(`http://localhost:${port}`))