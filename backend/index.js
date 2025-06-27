const serverless = require('aws-serverless-express');
const app = require('./src/app');
const server = serverless.createServer(app);

exports.handler = (event, context) => {
  return serverless.proxy(server, event, context);
};
