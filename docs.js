const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpoints = ['./server.js'];

swaggerAutogen(outputFile, endpoints);
