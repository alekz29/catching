'use strict'

const express = require('express')
const server = express()
server.use('/bundle.js',express.static('./dist/bundle.js'))
server.use(express.static('./static'))
server.listen(3000, () => {
    console.log('asd')
});
