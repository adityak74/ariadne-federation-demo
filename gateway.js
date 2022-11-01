const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://0.0.0.0:9001' },
    { name: 'reviews', url: 'http://0.0.0.0:9002' },
    { name: 'products', url: 'http://0.0.0.0:9003' },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});