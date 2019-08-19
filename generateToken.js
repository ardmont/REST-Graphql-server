require('dotenv').config()
const jwt = require('jsonwebtoken')

const token = jwt.sign({data: 'somedata'}, process.env.SECRET)
console.log(token)