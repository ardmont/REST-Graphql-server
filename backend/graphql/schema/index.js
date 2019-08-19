const { gql } = require('apollo-server-express')

// The GraphQL schema
module.exports = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`
