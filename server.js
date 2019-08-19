require('dotenv').config()
const { ApolloServer, AuthenticationError } = require('apollo-server-express')
const express = require('express')

const resolvers = require('./backend/graphql/resolvers')
const typeDefs = require('./backend/graphql/schema')

const decodeToken = require('./backend/graphql/middlewares/decodeToken')

const app = express()
const port = process.env.PORT || 3000

// This variable contains all public REST endpoints
const router = require('./backend/rest/router')

app.use(express.json()) // Parses all json data sent to the REST endpoints
app.use('/api', router) // Listen to the public REST endpoints

// creates Graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  /* context: ({ req }) => {
    // get the user token from the headers
    const authorization = req.headers.authorization || ''
    const token = authorization.split('Bearer ')[1]

    const context = decodeToken(token)
    if (!context.authenticated) throw new AuthenticationError('invalid token')
    return context
  } */
})

// Applies express app
server.applyMiddleware({ app })

app.listen(port, () => {
  console.log(`app listening on port ${port}.`)
})
