# REST-Graphql-server
This project consists in creating a basic structure wich uses both REST and Graphql patterns, by using Express and Apollo Server frameworks.

## Explanation
Express is used for handle public requests, with the creation of public enpoints. And Apollo Server is used for handle private requests by the verification and decoding of JWTs on the context function. This is useful for cases when it's not convenient to use [Apollo Server authentication solutions](https://www.apollographql.com/docs/apollo-server/features/authentication/) 

### Try it
1. Run `npm install` or `yarn install`
2. Run `npm start` or `yarn start`
3. Send a GET request for [address:port]/api/hello. You should get a 200 response with the string "Hello world from public endpoint"
4. Send "query { hello }" for [address:port]/graphql ( or use the Graphql Playground ). You should get an unauthenticated error.
5. Generate a token with the generateToken script by runing `node generateToken.js`
6. Repeat the step 4 using the token. You should get a hello world response from the Apollo Server.
