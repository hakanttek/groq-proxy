const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LeadGenie API',
      version: '1.0.0',
      description: 'Swagger documentation of the LeadGenie API',
    },
    servers: [
      {
        url: process.env.ORIGIN ?? ('http://localhost:' + (process.env.PORT || 3000)),
      },
    ],
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };